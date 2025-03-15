FROM node:22.14.0

COPY kmls /lg-controller/
COPY package.json /lg-controller/
COPY package-lock.json /lg-controller/
COPY public /lg-controller/
COPY src /lg-controller/
COPY .next /lg-controller/

COPY .gitignore /lg-controller/
COPY eslint.config.mjs /lg-controller/
COPY jsconfig.json /lg-controller/
COPY README.md /lg-controller/
COPY next.config.mjs /lg-controller/

WORKDIR /lg-controller

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]
