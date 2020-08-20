FROM node:alpine3.12

ENV PORT=3000
ENV HOST=0.0.0.0 

WORKDIR /app
COPY . .

RUN npm install --no-cache
EXPOSE 3000

# HEALTHCHECK --interval=5s --timeout=2s --start-period=5s --retries=3 CMD [ "curl", "localhost:3000/health" ]

ENTRYPOINT ["node", "app.js"]

# ENTRYPOINT ["npm", "run"]
# CMD ["start"]