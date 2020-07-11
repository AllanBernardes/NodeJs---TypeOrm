import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { provide } from 'inversify-binding-decorators';
import { TYPES } from "../../types";


export interface IClientDto {
  corporate_id: number, 
  corporate_name: string,
  fantasy_name: string,
  city: string,
  state: string,
  district: string,
  adress: string,
  cep: string,
  email: string,
  cnpj: string,
  cell_phone: string,
  phone: string,
  ciretran: string,
  cfc_id: number,
  state_registration: string,
  municipal_registration: string
}

@Exclude()
@Expose()
@provide(TYPES.ClientEntity)
export class ClientDto implements IClientDto{
  
  constructor(
    public  corporate_id: number, 
    public  corporate_name: string,
    public  fantasy_name: string,
    public  city: string,
    public  state: string,
    public  district: string,
    public  adress: string,
    public  cep: string,
    public  email: string,
    public  cnpj: string,
    public cell_phone: string,
    public phone: string,
    public ciretran: string,
    public cfc_id: number,
    public state_registration: string,
    public municipal_registration: string

    ) {
    this.corporate_id = corporate_id,
    this.corporate_name = corporate_name,
    this.fantasy_name = fantasy_name,
    this.city = city,
    this.state = state,
    this.district = district,
    this.adress = adress,
    this.cep = cep,
    this.email = email,
    this.cnpj = cnpj,
    this.cell_phone = cell_phone,
    this.phone = phone,
    this.ciretran = ciretran,
    this.cfc_id = cfc_id,
    this.state_registration = state_registration,
    this.municipal_registration = municipal_registration
  }  
}

