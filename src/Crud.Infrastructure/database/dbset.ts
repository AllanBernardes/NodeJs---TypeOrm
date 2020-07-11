import "reflect-metadata";
import {createConnection} from "typeorm";


export async function getDbConnection() {
createConnection({
    type: "postgres",
    host: "localhost",
    port: 15432,
    username: "postgres",
    password: "detran",
    database: "client_detran",
    entities: [
      "./src/Crud.Domain/Entities/*.ts"
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));
}