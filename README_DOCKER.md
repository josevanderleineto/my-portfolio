# Docker Setup - Portfolio Vanderlei Neto

## Como rodar o projeto com Docker

### Opção 1: Usando Docker Compose (Recomendado)

#### Para Desenvolvimento (com hot reload):
```bash
npm run docker:dev
```
ou
```bash
docker-compose --profile dev up portfolio-dev
```

#### Para Produção:
```bash
npm run docker:prod
```
ou
```bash
docker-compose up portfolio
```

### Opção 2: Usando Docker diretamente

#### Build da imagem:
```bash
npm run docker:build
```
ou
```bash
docker build -t vanderlei-portfolio .
```

#### Rodar o container:
```bash
npm run docker:run
```
ou
```bash
docker run -p 3000:3000 vanderlei-portfolio
```

### Parar os containers:
```bash
npm run docker:stop
```
ou
```bash
docker-compose down
```

## Portas

- **Produção**: http://localhost:3000
- **Desenvolvimento**: http://localhost:3001

## Arquivos Docker criados

- `Dockerfile` - Configuração de produção (multi-stage build otimizado)
- `Dockerfile.dev` - Configuração de desenvolvimento (com hot reload)
- `docker-compose.yml` - Orquestração dos containers
- `.dockerignore` - Arquivos ignorados durante o build

## Configurações

O projeto foi configurado com:
- `output: 'standalone'` no `next.config.ts` para compatibilidade com Docker
- Scripts npm para facilitar o uso
- Imagens otimizadas com Alpine Linux
- Multi-stage build para reduzir o tamanho da imagem final