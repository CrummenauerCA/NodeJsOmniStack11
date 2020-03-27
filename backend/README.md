npm install nodemon -D
npm install knex
npm install sqlite3
npx knex init

npx knex migrate:make create_ongs
npx knex migrate:latest

npm install cors