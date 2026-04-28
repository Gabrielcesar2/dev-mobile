# Estágio 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Instala dependências necessárias para o sistema
RUN apk add --no-cache libc6-compat

COPY package*.json ./
# Instala as dependências do projeto
RUN npm install

COPY . .

# Comando para gerar a versão web (usando npx para não precisar instalar o expo globalmente)
RUN npx expo export --platform web

# Estágio 2: Servidor NGINX
FROM nginx:stable-alpine
# No Expo moderno, os arquivos vão para a pasta 'dist'
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]