FROM node:16.15.1

WORKDIR /app

COPY "package.json" .

RUN npm

COPY . .

CMD ["npm", "run"]