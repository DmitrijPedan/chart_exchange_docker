Api-server for exchange-rates https://api.privatbank.ua/p24api/exchange_rates;

up docker:
@make up

down docker:
@make down:

build docker:
@make build

docker ps:
@make ps

connect_api:
@make connect_api

start_api:
@make start_api


request example:
http://localhost:5000/api?start=05.01.2020&end=07.01.2020
