FROM node:lts-alpine

WORKDIR /app

COPY package.json

RUN NPM install

COPY . .

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
