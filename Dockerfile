# Builder Stage
FROM node:22 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app ./
EXPOSE 5011
CMD ["node", "server.js"]
