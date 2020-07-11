import { ClientEntity } from '../Entities/ClientEntity';
import { ClientDto } from '../../Crud.Application/Dto/ClientDto';


export interface IClientService {
    
    save(client:  ClientDto, ) : Promise<ClientDto>;    
};
