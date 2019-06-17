all: start-local

start-local:
	@echo "Local"
	npm run dev

install:
	rm -rf node_modules && npm install

build:
	npm run build

deploy:
	git push heroku develop:master
