#!/bin/sh
# Запускает Directus (:8055) и сайт (:4321) в одном контейнере.
# Если упадёт любой из них — контейнер завершится и docker (restart: unless-stopped) поднимет его заново.
node /directus/cli.js bootstrap

PORT=8055 node /directus/cli.js start &
D=$!
PORT=4321 HOST=0.0.0.0 CMS_URL=http://127.0.0.1:8055 node /app/dist/server/entry.mjs &
S=$!

trap 'kill $D $S 2>/dev/null; exit 0' TERM INT
while kill -0 $D 2>/dev/null && kill -0 $S 2>/dev/null; do sleep 3; done
echo "один из процессов остановился, перезапуск контейнера" >&2
kill $D $S 2>/dev/null
exit 1
