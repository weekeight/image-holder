FROM daocloud.io/node:5

ENV PORT 3000

COPY . /image-holder
WORKDIR /image-holder

RUN npm install

EXPOSE 8888

CMD ['npm', 'start']