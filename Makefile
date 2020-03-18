up:
	@docker-compose up -d

down:
	@docker-compose down

build:
	@docker-compose build

ps:
	@docker-compose ps

connect_api:
	@docker-compose exec -w /www api bash

start_api:
	@docker-compose exec -w /www api npm run dev

