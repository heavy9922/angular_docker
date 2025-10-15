# Etapa 1: Construcción de la aplicación Angular
FROM node:22-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm y dependencias
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copiar código fuente
COPY . .

# Construir la aplicación para producción
RUN pnpm run build

# Etapa 2: Servidor web con Nginx
FROM nginx:alpine

# Copiar archivos build desde la etapa anterior
# El output de Angular se genera en dist/angular-docker/browser
COPY --from=builder /app/dist/angular-docker/browser /usr/share/nginx/html

# Copiar configuración personalizada de Nginx para Angular (SPA)
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Cache para archivos estáticos \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
