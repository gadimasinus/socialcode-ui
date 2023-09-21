import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import studentsData from './data/students.json';  


export interface Student {  
    id: Number;  
    name: String;  
    email: String;  
    address: String;  
}  

@Injectable()
export class SocialCodeService {

    constructor(private httpClient: HttpClient) {}
     
    baseUrl: string = "https://4i7ppy3id9.us-east-1.awsapprunner.com/";
    
    getStudentsByTeacher(teacherId: number): Observable<Student[]> {
        return of(studentsData);
    }

    getversion() : Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.httpClient.get(this.baseUrl +"version",{ headers, responseType: 'text'});
    }
}