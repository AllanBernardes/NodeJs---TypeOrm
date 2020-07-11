import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { provide } from 'inversify-binding-decorators';
import { TYPES } from "../../types";


export interface IStudentDto {
  student_id: number, 
  student_name: string,
  renach: string,
  cpf: string,
  rg: string,
  email: string,
  cell_phone: string,
  phone: string
  
}

@Exclude()
@Expose()
@provide(TYPES.StudentEntity)
export class StudentDto implements IStudentDto{
  
  constructor(
    public  student_id: number, 
    public  student_name: string,
    public  renach: string,
    public  cpf: string,
    public  rg: string,
    public  email: string,
    public  cell_phone: string,
    public  phone: string
    

    ) {
    this.student_id = student_id,
    this.student_name = student_name,
    this.renach = renach,
    this.cpf = cpf,
    this.rg = rg,    
    this.email = email,    
    this.cell_phone = cell_phone,
    this.phone = phone
    
    
  }  
}

