# Latest version of Node
FROM node:carbon

WORKDIR /app

COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 4000

CMD npm run dev

