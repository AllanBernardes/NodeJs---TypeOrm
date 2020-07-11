import {EntityRepository, Repository, getRepository, getManager, getConnection} from "typeorm";
import { injectable } from "inversify";
import { StudentEntity } from "../Crud.Domain/Entities/StudentEntity";
import IStudentRepository from "../Crud.Domain/IRepository/IStudentRepository";
import { ClientEntity } from "../Crud.Domain/Entities/ClientEntity";

@injectable()
export class StudentRepository implements IStudentRepository {
  
  async add(studentEntity: StudentEntity): Promise<StudentEntity> {
    const entityManager = getManager();    
    const entity = await entityManager.create(StudentEntity, studentEntity);    
    return await entityManager.save(StudentEntity, studentEntity);       
  }

    async getbyid(studentEntity: StudentEntity) {    
    const entityManager = getManager();    
    return await entityManager.findOne(StudentEntity, studentEntity.student_id);              
  } 
  
  async getall() {    

  const entityManager = getRepository(StudentEntity)
    .createQueryBuilder('students')    
    .leftJoinAndSelect('students.client','client')
    .select('students.student_name')
    .addSelect('client.corporate_name')
    .getMany();
    return await entityManager;
  }
}