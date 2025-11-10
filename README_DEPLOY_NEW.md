# Frontend do Portfólio (Next.js)

Este é o frontend do seu portfólio, agora configurado para consumir uma API de contato externa.

## Configuração da API de Contato

O formulário de contato agora envia requisições para uma API externa, cuja URL é definida por uma variável de ambiente.

1.  **Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto (se não existir) e adicione a variável:

    \`\`\`
    # URL da API de Contato
    # Em desenvolvimento, use a URL local: http://localhost:3001
    # Em produção, use a URL de deploy da sua API (ex: https://sua-api-de-contato.render.com)
    NEXT_PUBLIC_CONTACT_API_URL=http://localhost:3001
    \`\`\`

2.  **Atualização para Produção:**
    Ao fazer o deploy na Vercel, você deve configurar a variável de ambiente `NEXT_PUBLIC_CONTACT_API_URL` com a URL pública da sua API de contato (a que você implantou no Render ou serviço similar).

## Deploy na Vercel

1.  Faça o push do seu código atualizado para o GitHub.
2.  Conecte seu repositório à [Vercel](https://vercel.com/).
3.  Durante a configuração do projeto na Vercel, vá para a seção **Environment Variables**.
4.  Adicione a variável `NEXT_PUBLIC_CONTACT_API_URL` e defina seu valor como a URL pública da sua API de contato.
5.  Faça o deploy.

## Alterações Feitas

- A rota de API interna (`/api/contact`) foi removida.
- O componente `ContactForm.tsx` foi modificado para usar a variável de ambiente `NEXT_PUBLIC_CONTACT_API_URL` para enviar a requisição POST para a API externa.
\`\`\`
