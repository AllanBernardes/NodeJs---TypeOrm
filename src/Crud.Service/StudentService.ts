import { plainToClass } from "class-transformer";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { StatusEnum } from "../Crud.Domain/Enum/StatusEnum";
import { IStudentService } from "../Crud.Domain/IService/IStudentService";
import { StudentDto } from "../Crud.Application/Dto/StudentDto";
import { StudentEntity } from "../Crud.Domain/Entities/StudentEntity";
import { StudentRepository } from "../Crud.Infrastructure/StudentRepository";
import * as bcrypt from "bcryptjs";

@injectable()
export class StudentService implements IStudentService{

  constructor( @inject(TYPES.StudentRepository) private rep: StudentRepository) { }

  public async save(studentDto: StudentDto): Promise<StudentDto> {        
    const entity = plainToClass(StudentEntity, studentDto);         
    entity.status = StatusEnum.Ativo;
    entity.createdAt = new Date();    
    return await this.rep.add(entity);    
  }

  public async getbyid(studentDto: StudentDto) {        
    const getiId = plainToClass(StudentEntity, studentDto);  
    return await this.rep.getbyid(getiId);    
  }

  public async getall() {               
    return await this.rep.getall();    
  } 
  

  async validatelogin(studentDto: StudentEntity) {       
    const user = await this.rep.findByEmail(studentDto.email);
    if(user == null){ return false; }

    const entity = plainToClass(StudentEntity, user); 

    const isPasswordMatching = await bcrypt.compare(studentDto.password, entity.password.toString());

    if (!isPasswordMatching) {
      // throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
      return false;
    } else {
      return user;
    }    
  }

}