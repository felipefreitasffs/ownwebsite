# --------------------------------------------------------------------
# Dockerfile Otimizado para Next.js (Standalone)
# --------------------------------------------------------------------

# Estágio 1: Builder
# Aqui instalamos as dependências e construímos o projeto.
# --------------------------------------------------------------------
  FROM node:20-alpine AS builder
  WORKDIR /app
  
  COPY package.json package-lock.json ./
  RUN npm ci
  COPY . .
  
  # Este comando cria as pastas: .next/standalone, .next/static
  RUN npm run build
  
  # --------------------------------------------------------------------
  # Estágio 2: Runner
  # Aqui criamos a imagem final, leve e pronta para produção.
  # --------------------------------------------------------------------
  FROM node:20-alpine AS runner
  WORKDIR /app
  
  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED 1
  
  # Copia o servidor otimizado e as dependências (node_modules)
  COPY --from=builder /app/.next/standalone ./
  
  # Copia os ficheiros estáticos (CSS, JS, etc.)
  # ESTA É A LINHA QUE CORRIGE O SEU PROBLEMA
  COPY --from=builder /app/.next/static ./.next/static
  
  # Expõe a porta em que o servidor Next.js irá rodar
  EXPOSE 3000
  
  # Comando para iniciar o servidor
  CMD ["node", "server.js"]