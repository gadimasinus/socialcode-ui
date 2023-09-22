import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Course, Person } from '../domain/model';

@Component({
  selector: 'teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent {
  
  mode : string = "student";
  learners: Person[] = []; 
  myCourses: Course[] = []; 

  selectedLearner? : Person;
  selectedLearnerId? : number;

  selectedCourseId? : number;
  selectedCourse? : Course;
  fileName?:String;

  constructor(private socialCodeService: SocialCodeService) {
  }

  onMyStudentClick() {
    this.mode = "learner";
  }
  onMyCourseClick(){
    this.mode = "course";
  }

  onAssignAssignmentClick(){
    this.mode = "assignAssignment";
  }

  onViewAssignmentClick(){
    this.mode = "viewAssignment";
  }

  onCreateAssignmentClick(){
    this.mode = "createAssignment";
  }

  

  ngOnInit() {
    this.socialCodeService.getStudentsByTeacher(1).subscribe((learnersData: Person[]) => {
      console.log(learnersData)
      this.learners = learnersData;
      
    });

    this.socialCodeService.getAllCourses().subscribe((courseData: Course[]) => {
      console.log(courseData)
      this.myCourses = courseData;
    });
  }

  
  onStudentSelected() {
    console.log(this.selectedLearnerId);
    this.selectedLearner = this.learners.find(Item => Item.id == this.selectedLearnerId);
	}
  onCourseSelected() {
		console.log(this.selectedCourseId);
    this.selectedCourse = this.myCourses.find(Item => Item.id == this.selectedCourseId);
	}

  onFileSelected(event :any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        //const upload$ = this.http.post("/api/thumbnail-upload", formData);

        //upload$.subscribe();
    }
}

  

  

}
