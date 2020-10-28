FROM node:latest
WORKDIR /app
ADD . .
EXPOSE 3000
RUN npm i
CMD npm run dev


