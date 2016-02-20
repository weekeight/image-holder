FROM daocloud.io/node:5

ENV PORT 8888

COPY . /image-holder
WORKDIR /image-holder

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8888

CMD ["npm", "start"]