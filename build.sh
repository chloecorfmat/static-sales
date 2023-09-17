docker compose -f docker-compose.yml up -d
docker compose exec node yarn build
cp docker-compose.prod.yml dist/docker-compose.yml