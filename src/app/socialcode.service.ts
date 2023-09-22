import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import studentsData from './data/students.json';  
import coursesData from './data/course.json';  
import { Person , Course} from './domain/model';


 

export class Item{
    name: string ='';
    value:number=1;
}

export const USER_TYPE: Item[] = [
    {
        name:'LEARNER',
        value:1
    },
    {
        name:'TEACHER',
        value:2
    },
    {
        name:'ADMIN',
        value:3
    }
   
];

@Injectable()
export class SocialCodeService {

    constructor(private httpClient: HttpClient) {}
     
    baseUrl: string = "https://4i7ppy3id9.us-east-1.awsapprunner.com/";
    
    getStudentsByTeacher(teacherId: number): Observable<Person[]> {
        return of(studentsData);
    }

    getversion() : Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.httpClient.get(this.baseUrl +"version",{ headers, responseType: 'text'});
    }
    getAllCourses(): Observable<Course[]> {
        return of(coursesData);
    }
}


