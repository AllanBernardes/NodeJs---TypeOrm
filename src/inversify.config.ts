import { AsyncContainerModule } from "inversify";
import { TYPES } from "./types";
import { IClientService } from "./Crud.Domain/IService/IClientService";
import { ClientService } from "./Crud.Service/ClientService";
import { getDbConnection } from "./Crud.Infrastructure/database/dbset";
import { ClientController } from "./Crud.API/Controllers/ClientController";
import { ClientEntity } from "./Crud.Domain/Entities/ClientEntity";
import { ClientRepository } from "./Crud.Infrastructure/ClientRepository";
import { Repository } from "typeorm";
import { StudentEntity } from "./Crud.Domain/Entities/StudentEntity";
import { StudentController } from "./Crud.API/Controllers/StudentController";
import { StudentService } from "./Crud.Service/StudentService";
import { StudentRepository } from "./Crud.Infrastructure/StudentRepository";

// const myContainer = new Container();
// myContainer.bind<IClientService>(TYPES.ClientService).to(ClientService);
// myContainer.bind<ClientController>(TYPES.ClientController).to(ClientController);

// export { myContainer };


export const bindings = new AsyncContainerModule(async (bind) => {

  await getDbConnection();
  await require("./Crud.API/Controllers/ClientController");
  await require("./Crud.API/Controllers/StudentController");

  bind<ClientService>(TYPES.ClientService).to(ClientService);
  bind<ClientRepository>(TYPES.ClientRepository).to(ClientRepository);  
  bind<ClientController>(TYPES.ClientController).to(ClientController);
  bind<ClientEntity>(TYPES.ClientEntity).to(ClientEntity);
  //------------------------------------------------------//

  bind<StudentService>(TYPES.StudentService).to(StudentService);
  bind<StudentRepository>(TYPES.StudentRepository).to(StudentRepository);  
  bind<StudentController>(TYPES.StudentController).to(StudentController);
  bind<StudentEntity>(TYPES.StudentEntity).to(StudentEntity);
  

});