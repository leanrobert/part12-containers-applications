FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci

ENV MONGO_URL=mongodb+srv://leanrobert:RB450Gmtik@cluster0.qbw8tgf.mongodb.net/?retryWrites=true&w=majority&dbname=todo-app
ENV REDIS_URL=//localhost:6378

USER node
CMD npm start