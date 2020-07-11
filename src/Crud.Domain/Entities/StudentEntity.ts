import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import "reflect-metadata";
import { ClientEntity } from "./ClientEntity";
import { EntityBase } from "./EntityBase/EntityBase";

@Entity()
export class StudentEntity extends EntityBase {
   
  @PrimaryGeneratedColumn()
  student_id!: number;
  
  @Column("varchar", { length: 200 })
  student_name!: string;
  
  @Column("varchar", { length: 30 })
  renach!: string;
  
  @Column("varchar", { length: 20 })
  cpf!: string;
  
  @Column("varchar", { length: 30 })
  rg!: string;

  @Column("varchar", { length: 30 })
  email!: string;

  @Column("varchar", { length: 20 })
  cell_phone!: string;

  @Column("varchar", { length: 20 })
  phone!: string;
  
  @ManyToOne(() => ClientEntity, client => client.students)
  @JoinColumn({ name: "corporate_id"})
  client!: ClientEntity;

  

}