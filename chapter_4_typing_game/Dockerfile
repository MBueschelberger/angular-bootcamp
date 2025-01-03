FROM node:22.9.0-bookworm-slim

RUN apt update && apt upgrade -y
RUN apt install -y git

WORKDIR /usr/src/app

COPY game/ /usr/src/app/

RUN npm install

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
