import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import {Student} from '../socialcode.service'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: Student[] = []; 
  version :string ='';
  constructor(private socialCodeService: SocialCodeService) {
  }

  ngOnInit() {
    this.socialCodeService.getStudentsByTeacher(1).subscribe((studentData: Student[]) => {
      console.log(studentData)
      this.students = studentData;
    });
  }
}
