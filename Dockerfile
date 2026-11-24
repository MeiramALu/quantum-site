# Один контейнер: Directus (админка, :8055) + сайт Astro SSR (:4321), запуск через deploy/start.sh.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM directus/directus:12.5.1
USER root
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
# для разовой заливки данных: node /app/cms/seed.mjs
COPY --from=build /app/src ./src
COPY --from=build /app/public ./public
COPY --from=build /app/cms/seed.mjs ./cms/seed.mjs
COPY deploy/start.sh ./start.sh
RUN mkdir -p /directus/database /directus/uploads && chown -R node:node /directus /app
USER node
WORKDIR /directus
ENV NODE_ENV=production
EXPOSE 4321 8055
CMD ["sh", "/app/start.sh"]
