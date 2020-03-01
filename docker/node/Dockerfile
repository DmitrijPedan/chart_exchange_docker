FROM node:12.16.1

USER node

WORKDIR /www

CMD ["node", "-e", "setInterval(() => {}, 60000); process.on('SIGTERM', () => process.exit(0));"]