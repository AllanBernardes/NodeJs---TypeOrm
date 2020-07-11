import { ClientEntity } from '../Entities/ClientEntity';

export default interface IClientRepository {
    add(clientDto: ClientEntity) : Promise<ClientEntity>;
}
