import { StudentEntity } from '../Entities/StudentEntity';

export default interface IStudentRepository {
    add(studentEntity: StudentEntity) : Promise<StudentEntity>;
}
