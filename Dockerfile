# ESTÁGIO 1: Build (Onde o código é transformado em arquivos estáticos)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ESTÁGIO 2: Servidor (Onde o NGINX entrega esses arquivos para o navegador)
FROM nginx:stable-alpine
# Copia apenas os arquivos necessários da pasta 'dist' (padrão do Vite)
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]