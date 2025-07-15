# Instruções de Deploy - Portfólio Vanderlei Neto

## Problema Corrigido

O problema do formulário de contato não funcionar após o deploy foi corrigido. As principais alterações foram:

1. **Configuração das variáveis de ambiente**: Criado arquivo `.env.local` com as credenciais do Gmail
2. **Remoção da configuração de export**: Removida a configuração `output: 'export'` do `next.config.ts` para permitir API routes
3. **Configuração correta do Nodemailer**: O código já estava correto, apenas faltavam as variáveis de ambiente

## Variáveis de Ambiente Necessárias

Para o funcionamento do formulário de contato, você precisa configurar as seguintes variáveis de ambiente:

```env
GMAIL_USERNAME=jose.vanderlei.nn@gmail.com
GMAIL_PASSWORD=utyb lfqq gzsn gfpc
```

### Como configurar no deploy:

#### Vercel:
1. Acesse o dashboard do Vercel
2. Vá em Settings > Environment Variables
3. Adicione as variáveis:
   - `GMAIL_USERNAME`: jose.vanderlei.nn@gmail.com
   - `GMAIL_PASSWORD`: utyb lfqq gzsn gfpc

#### Netlify:
1. Acesse o dashboard do Netlify
2. Vá em Site settings > Environment variables
3. Adicione as mesmas variáveis

#### Outros provedores:
Configure as variáveis de ambiente conforme a documentação do seu provedor de hospedagem.

## Comandos para Deploy Local

```bash
# Instalar dependências
npm install

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Teste do Formulário

O formulário foi testado e está funcionando corretamente. Quando uma mensagem é enviada:

1. Os dados são validados no frontend
2. A API route `/api/contact` processa a requisição
3. O e-mail é enviado via Gmail SMTP
4. Uma mensagem de sucesso é exibida ao usuário
5. O e-mail é enviado para: jose.vanderlei.nn@gmail.com

## Arquivos Importantes

- `.env.local`: Variáveis de ambiente (não commitado no Git)
- `.env.example`: Exemplo das variáveis necessárias
- `src/app/api/contact/route.ts`: API route para envio de e-mail
- `next.config.ts`: Configuração do Next.js (removido output: 'export')

## Observações

- O arquivo `.env.local` não é commitado no Git por segurança
- Use sempre senhas de app do Gmail, não a senha normal da conta
- Certifique-se de que a verificação em duas etapas está ativada no Gmail
- Para produção, considere usar um serviço de e-mail dedicado como SendGrid ou Mailgun

## Suporte

Se houver algum problema no deploy, verifique:

1. Se as variáveis de ambiente estão configuradas corretamente
2. Se a senha de app do Gmail está válida
3. Se não há bloqueios de firewall para SMTP
4. Os logs do servidor para mensagens de erro específicas

