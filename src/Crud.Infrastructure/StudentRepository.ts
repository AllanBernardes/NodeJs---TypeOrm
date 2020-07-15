import {EntityRepository, Repository, getRepository, getManager, getConnection} from "typeorm";
import { injectable } from "inversify";
import { StudentEntity } from "../Crud.Domain/Entities/StudentEntity";
import IStudentRepository from "../Crud.Domain/IRepository/IStudentRepository";



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


  async login(studentEntity: StudentEntity) {    

    const entityManager = await getRepository(StudentEntity)
    .createQueryBuilder('students')          
      .where("students.email = :email AND students.password = :password",
            { email: studentEntity.email, password: studentEntity.password })            
      .getOne();
      return entityManager;
    }


  async findByEmail(email: string) {   

    const entityManager = await getRepository(StudentEntity)
    .createQueryBuilder('students')                 
      .where("students.email = :email",
            { email: email})            
      .getOne();
      return entityManager;
    }
    


  
}