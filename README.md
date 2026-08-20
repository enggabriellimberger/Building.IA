# Building.IA

Plataforma de engenharia assistida por inteligência artificial para
projetos residenciais: interpretação de planta, cálculo estrutural,
fundações, muro de arrimo, instalações, cronograma e orçamento.

## Publicação

Este repositório é servido pelo **GitHub Pages**. O site inteiro é um
único arquivo `index.html`, sem etapa de build.

Para publicar:

1. **Settings → Pages**
2. Em **Source**, escolher `Deploy from a branch`
3. Branch `main`, pasta `/ (root)`
4. Salvar e aguardar 1 a 2 minutos

O endereço fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Configuração de pagamentos

Toda a configuração fica em **`config.js`**, um arquivo pequeno que pode ser
editado direto pelo GitHub: abra o arquivo, clique no lápis, altere os valores
entre aspas e commite. O Pages republica sozinho em cerca de um minuto.

Não é preciso mexer no `index.html` — ele tem 15 MB e o editor web do GitHub
não abre arquivos desse tamanho.

Enquanto os campos estiverem vazios, o site funciona normalmente e a cobrança
acontece por PIX com liberação manual por código.

> O **Access Token** do Mercado Pago nunca entra no `config.js`. Ele é secreto
> e vive apenas nas variáveis de ambiente da Vercel.

O backend fica em repositório separado — veja `building-ia-pagamentos`.

## Observações

- O arquivo tem cerca de 16 MB porque as pranchas em PDF dos projetos
  estruturais estão embutidas em base64. O primeiro carregamento é lento
  em conexões ruins.
- Todas as bibliotecas vêm de CDN: Tailwind, jsPDF, SheetJS, pdf.js,
  Tesseract, Firebase e o SDK do Mercado Pago. O site precisa de internet.
- O arquivo `.nojekyll` impede que o GitHub Pages processe o conteúdo com
  Jekyll, o que pode quebrar arquivos e pastas iniciados por underscore.
