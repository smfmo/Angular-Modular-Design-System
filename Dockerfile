ARG NODE_VERSION='22-alpine'
ARG NGINX_VERSION='alpine'
# Etapa 1 - BUILD
FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2 - RUN APPLICATION
FROM nginx:${NGINX_VERSION}

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/descubra-lugares-app/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'



