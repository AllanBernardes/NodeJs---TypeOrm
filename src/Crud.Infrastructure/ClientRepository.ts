import {EntityRepository, Repository, getRepository, getManager} from "typeorm";
import { ClientEntity } from "../Crud.Domain/Entities/ClientEntity";
import { injectable } from "inversify";
import IClientRepository from "../Crud.Domain/IRepository/IClientRepository";

@injectable()
export class ClientRepository implements IClientRepository {
  
  async add (clientDto: ClientEntity): Promise<ClientEntity> {
    const entityManager = getManager();
    const entity = await entityManager.create(ClientEntity, clientDto);  
    return await entityManager.save(ClientEntity, entity);       
  }

  async getbyid(clientDto: ClientEntity) {    
    const entityManager = getManager();    
    return await entityManager.findOne(ClientEntity, clientDto.corporate_id);              
  } 
  
  async getall() {    
    const entityManager = getManager();     
    return await entityManager.find(ClientEntity);         
  } 

  

}