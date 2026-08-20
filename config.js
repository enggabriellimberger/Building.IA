// ══════════════════════════════════════════════════════════════════
//  BUILDING.IA — CONFIGURAÇÃO DE PAGAMENTOS
// ══════════════════════════════════════════════════════════════════
//
//  Este é o único arquivo que você precisa editar para ligar o
//  pagamento online. Pode ser alterado direto pelo GitHub: clique no
//  lápis, mude os valores entre aspas, e commite.
//
//  Enquanto os campos estiverem vazios, o site funciona normalmente
//  e a cobrança acontece por PIX com liberação manual por código.
//
//  ⚠ NUNCA coloque o ACCESS TOKEN do Mercado Pago aqui.
//    Ele começa com APP_USR- e é secreto — vive apenas nas variáveis
//    de ambiente da Vercel. Este arquivo é público.
//
// ══════════════════════════════════════════════════════════════════

window.MP_CONFIG = {

    // ── 1. Public Key do Mercado Pago ────────────────────────────
    // Onde achar: mercadopago.com.br/developers/panel
    //   → Suas integrações → sua aplicação → Credenciais
    // Comece pela de TESTE (começa com TEST-). Só troque pela de
    // produção depois que todo o fluxo funcionar.
    publicKey: 'TEST-826b480d-5121-462c-96e3-7dbf59cd2e51',

    // ── 2. Endereço do backend na Vercel ─────────────────────────
    // A URL do Cloudflare Worker. SEM barra no final.
    backend: 'https://building-ia-pagamentos.gabriel-elias-limberger.workers.dev',

    // ── 3. Firebase ──────────────────────────────────────────────
    // Onde achar: console.firebase.google.com
    //   → Configurações do projeto → Seus apps → app Web
    // São os campos projectId e apiKey do bloco firebaseConfig.
    // Ambos são públicos por natureza; a proteção vem das regras
    // do Firestore, que negam escrita pelo navegador.
    firebaseProjectId: 'building-ia',
    firebaseApiKey: 'AIzaSyA0Tbgeb884X0eBO1CnwPde3HbX8bzUKc0'

};
