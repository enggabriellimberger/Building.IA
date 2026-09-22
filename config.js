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
    // Em PRODUÇÃO: cobranças e pagamentos são reais.
    publicKey: 'APP_USR-f5c2fb43-219c-44c6-99eb-54448f1a148c',

    // ── 2. Endereço do backend ───────────────────────────────────
    // A URL do Cloudflare Worker. SEM barra no final.
    backend: 'https://building-ia-pagamentos.gabriel-elias-limberger.workers.dev'

    // O Firebase saiu do site em 22/09/2026: nunca chegou a ser ligado
    // e só servia de superfície de ataque. Contas, projetos e
    // liberações vivem no Worker.

};
