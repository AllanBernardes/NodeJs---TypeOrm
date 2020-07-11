import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import "reflect-metadata";
import { StudentEntity } from "./StudentEntity";
import { UserEntity } from "./UserEntity";
import { IsNumber } from "class-validator";
import { EntityBase } from "./EntityBase/EntityBase";
import { StatusEnum } from "../Enum/StatusEnum";

@Entity()
export class ClientEntity extends EntityBase {

  constructor(
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
    municipal_registration: string, 
    createdAt: Date,
    updatedAt: Date,
    status: StatusEnum

    ) {    
    super(createdAt, updatedAt, status);
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
   
  @PrimaryGeneratedColumn()
  corporate_id!: number;
  
  @Column("varchar", { length: 200 })
  corporate_name!: string;
  
  @Column("varchar", { length: 200 })
  fantasy_name!: string;
  
  @Column("varchar", { length: 200 })
  city!: string;
  
  @Column("varchar", { length: 60 })
  state!: string;
  
  @Column("varchar", { length: 60 })
  district!: string;

  @Column("varchar", { length: 120 })
  adress!: string;

  @Column("varchar", { length: 8 })
  cep!: string;

  @Column("varchar", { length: 30 })
  email!: string;

  @Column("varchar", { length: 18 })
  cnpj!: string;
  
  @Column("varchar", { length: 20 })
  cell_phone!: string;

  @Column("varchar", { length: 20 })
  phone!: string;

  @Column("varchar", { length: 40 })
  ciretran!: string;

  @Column("integer")
  @IsNumber()
  cfc_id!: number;

  @Column("varchar", { length: 40 })
  state_registration!: string;

  @Column("varchar", { length: 40 })
  municipal_registration!: string;

  @OneToMany(() => StudentEntity, students => students.client)
  @JoinColumn() 
  students?: StudentEntity[];

  @OneToMany(() => UserEntity, user => user.client) 
  @JoinColumn()
  user?: UserEntity[];

  
}