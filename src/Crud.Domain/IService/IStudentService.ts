import { StudentDto } from '../../Crud.Application/Dto/StudentDto';

export interface IStudentService {
    
    save(studentDto:  StudentDto, ) : Promise<StudentDto>;    
};
