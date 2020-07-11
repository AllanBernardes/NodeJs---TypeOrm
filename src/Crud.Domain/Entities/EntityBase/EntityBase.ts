import { StatusEnum } from "../../Enum/StatusEnum";
import { Entity, Column } from "typeorm";

@Entity()
export abstract class EntityBase {
  constructor(
              createdAt: Date, 
              updatedAt: Date,
              status: StatusEnum
  ) { }

  @Column("varchar", { length: 200 })
  createdAt!: Date;
  
  @Column("varchar", { length: 200, default: null, nullable: true })  
  updatedAt!: Date;
  
  @Column("varchar", { length: 200 })
  status!: number;
}