# Estágio 1: Builder - Instala dependências e constrói a aplicação
FROM node:20-alpine AS builder
WORKDIR /app

# Copia package.json e package-lock.json
COPY package.json package-lock.json ./

# Instala as dependências de produção
RUN npm ci

# Copia o restante do código-fonte
COPY . .

# Constrói a aplicação com a saída 'standalone'
RUN npm run build


# Estágio 2: Runner - Executa a aplicação otimizada
FROM node:20-alpine AS runner
WORKDIR /app

# Define o ambiente como produção
ENV NODE_ENV=production
# Desabilita telemetria do Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Copia os ficheiros da aplicação construída do estágio 'builder'
# Isso inclui a pasta 'standalone' e a pasta 'public'
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar o servidor Next.js
# O ficheiro server.js é gerado pelo build 'standalone'
CMD ["node", "server.js"]