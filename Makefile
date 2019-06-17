all: start-local

dev:
	npm run dev

install:
	rm -rf node_modules && npm install

build:
	npm run build

heroky-deploy:
	git push heroku develop:master
