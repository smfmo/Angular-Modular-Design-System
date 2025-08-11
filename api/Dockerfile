ARG NODE_VERSION='22-alpine'
FROM node:${NODE_VERSION}

WORKDIR /app

RUN npm install -g json-server@0.17.4

COPY ./db.production.json .

EXPOSE 4000

ENTRYPOINT exec json-server --watch db.production.json --host 0.0.0.0 --port 4000