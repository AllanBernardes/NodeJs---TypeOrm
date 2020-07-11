
module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 15432,
  "username": "postgres",
  "password": "detran",
  "database": "client_detran",
  "synchronize" : true,
  "logging": false,
  "migrations": [
    "./src/Crud.Infrastructure/migrations/*.ts"
  ],
  "cli":{
    "migrationsDir":"./src/Crud.Infrastructure/migrations"
  },
  "entities":[
    "./src/Crud.Domain/Entities/*.ts"
  ]

} 