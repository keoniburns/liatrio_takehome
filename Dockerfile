FROM node:18.15.0

WORKDIR /usr/src/app

COPY package*.json ./index.js ./data.json ./	

RUN npm install

EXPOSE 80
CMD ["node", "index.js"]
