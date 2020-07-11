import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import "reflect-metadata";
import { ClientEntity } from "./ClientEntity";
import { EntityBase } from "./EntityBase/EntityBase";

@Entity()
export class UserEntity extends EntityBase{
   
  @PrimaryGeneratedColumn()
  user_id!: number;
  
  @Column("varchar", { length: 200 })
  user_name!: string; 
  
  @Column("varchar", { length: 20 })
  cpf!: string;
  
  @Column("varchar", { length: 30 })
  rg!: string;

  @Column("varchar", { length: 30 })
  email!: string;

  @Column("varchar", { length: 20 })
  password!: string;

  @Column("varchar", { length: 20 })
  phone!: string;

  @Column("varchar", { length: 20 })
  cell_phone!: string;

  @Column("int")
  type_id!: number;
  
  @ManyToOne(() => ClientEntity, client => client.user)
  @JoinColumn({ name: "corporate_id" })
  client!: ClientEntity;
}