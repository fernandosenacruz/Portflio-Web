FROM node:alpine

WORKDIR /src

COPY package.json .

RUN npm install

COPY . .

RUN cd /src

CMD ["node", "index.ts"]