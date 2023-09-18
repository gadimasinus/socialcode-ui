import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import studentsData from './data/students.json';  


export interface Student {  
    id: Number;  
    name: String;  
    email: String;  
    address: String;  
}  

@Injectable()
export class SocialCodeService {

    getStudentsByTeacher(teacherId: number): Observable<Student[]> {
        return of(studentsData);
    }
}