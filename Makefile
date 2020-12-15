.PHONY: help login
.DEFAULT_GOAL := help

help:
	@grep -E '^[a-zA-Z_-]+.*:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

up: ## Start DB
	docker-compose up -d

down: ## Stop DB
	docker-compose down

clean: ## Stop & Destroy running stack and remove volumes
	docker-compose down -v
