# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS base

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY yarn.lock* ./

# Stage para instalação de dependências
FROM base AS deps
RUN npm ci --only=production

# Stage para build
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Stage de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos públicos
COPY --from=builder /app/public ./public

# Criar diretório .next com permissões corretas
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar build do Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]