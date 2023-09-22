import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Person } from '../domain/model';

@Component({
  selector: 'app-studentList',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Person[] = []; 
  version :string ='';
  constructor(private socialCodeService: SocialCodeService) {
  }

  ngOnInit() {
    this.socialCodeService.getStudentsByTeacher(1).subscribe((studentData: Person[]) => {
      console.log(studentData)
      this.students = studentData;
    });
  }
}
