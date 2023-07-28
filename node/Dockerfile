FROM node:latest

RUN apt-get update && \
    apt-get install vim -y

WORKDIR /AppNodeBasico

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]