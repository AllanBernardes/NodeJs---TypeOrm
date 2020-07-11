import { getRepository, Long} from "typeorm";
import { plainToClass } from "class-transformer";
import { ClientEntity } from "../Crud.Domain/Entities/ClientEntity";
import { ClientDto, IClientDto } from "../Crud.Application/Dto/ClientDto";
import { ClientRepository } from "../Crud.Infrastructure/ClientRepository";
import { injectable, inject } from "inversify";
import { IClientService } from "../Crud.Domain/IService/IClientService";
import { TYPES } from "../types";
import { StatusEnum } from "../Crud.Domain/Enum/StatusEnum";

@injectable()
export class ClientService implements IClientService{

  constructor( @inject(TYPES.ClientRepository) private rep: ClientRepository) { }

  public async save(clientDto: ClientDto): Promise<ClientDto> {         
    const entity = plainToClass(ClientEntity, clientDto); 
    entity.status = StatusEnum.Ativo;
    entity.createdAt = new Date();
    return await this.rep.add(entity);    
  }

  public async getbyid(clientDto: ClientDto) {        
    const newclientEntity = plainToClass(ClientEntity, clientDto);  
    return await this.rep.getbyid(newclientEntity);    
  }

  public async getall() {               
    return await this.rep.getall();    
  } 

}