FROM node:14-alpine as builder

ENV NODE_ENV=production

WORKDIR /app

COPY package.json /app/

RUN npm install --only=prod

COPY . /app

EXPOSE 8888

CMD ["node", "index.js"]