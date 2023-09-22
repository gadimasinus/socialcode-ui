import { Component, OnInit } from '@angular/core';
import { Course } from '../domain/model';
import { SocialCodeService } from '../socialcode.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  myCourses: Course[] = []; 
  version :string ='';
  constructor(private socialCodeService: SocialCodeService) {
  }

  ngOnInit() {
    this.socialCodeService.getAllCourses().subscribe((courseData: Course[]) => {
      console.log(courseData)
      this.myCourses = courseData;
    });
  }
}
