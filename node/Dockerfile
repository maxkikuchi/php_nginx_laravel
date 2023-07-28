FROM node:latest

RUN apt-get update && \
    apt-get install vim -y

WORKDIR /usr/src/app

RUN npm install mysql --save

EXPOSE 3000

#ENTRYPOINT [ "node", "index.js" ]