# Latest version of Node
FROM node:carbon

WORKDIR /app

COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

CMD npm run dock:dev

