import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Assignment, Course, Person } from '../domain/model';

@Component({
  selector: 'teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent {
  
  mode : string = "student";
  learners: Person[] = []; 
  myCourses: Course[] = []; 
  assignments: Assignment[] = []; 
  
  selectedLearner? : Person;
  selectedLearnerId? : string;

  selectedCourseId? : string;
  selectedCourse? : Course;

  selectedAssignmentId? : string;
  selectedAssignment? : Assignment;

  fileName?:String;

  learnersForAssignment :Person[]| undefined = [];

  teacherId : string ="10";

  constructor(private socialCodeService: SocialCodeService) {
  }

  onMyStudentClick() {
    this.mode = "learner";
    this.cleanUp();
  }
  onMyCourseClick(){
    this.mode = "course";
    this.cleanUp();
  }

  onAssignAssignmentClick(){
    this.mode = "assignAssignment";
    this.cleanUp();
  }

  onViewAssignmentClick(){
    this.mode = "viewAssignment";
    this.cleanUp();
  }

  onCreateAssignmentClick(){
    this.mode = "createAssignment";
    this.cleanUp();
  }

  

  ngOnInit() {

    this.teacherId = this.socialCodeService.getLoginId();
    
    this.socialCodeService.getStudentsByTeacher(this.teacherId).subscribe((learnersData: Person[]) => {
      console.log(learnersData)
      this.learners = learnersData;
      
    });

    this.socialCodeService.getAllCoursesById(this.teacherId).subscribe((courseData: Course[]) => {
      console.log(courseData)
      this.myCourses = courseData;
    });

    this.socialCodeService.getAllAssignmentById(this.selectedLearnerId).subscribe((responseData: Assignment[]) => {
      console.log(responseData)
      this.assignments = responseData;
    },
    error => {
      console.log("service error " + JSON.stringify(error));
     }
    );
  }

  onAddSelectedStudent(){
     console.log(this.selectedLearner);
     if(this.learnersForAssignment && this.selectedLearner) {
      this.learnersForAssignment.push(this.selectedLearner);
    }
  }

  onStudentSelected() {
    console.log(this.selectedLearnerId);
    this.selectedLearner = this.learners.find(Item => Item.id == this.selectedLearnerId);
	}
  onCourseSelected() {
		console.log(this.selectedCourseId);
    this.selectedCourse = this.myCourses.find(Item => Item.id == this.selectedCourseId);
	}

  onAssignemntSelected() {
		console.log(this.selectedAssignmentId);
    this.selectedAssignment = this.assignments.find(Item => Item.assignmentId == this.selectedAssignmentId);
	}

  onAssignmentClick(){

  }

  cleanUp() {
    this.learnersForAssignment = [];
    this.selectedLearner = new Person();
    this.selectedLearnerId ="";

    this.selectedCourseId="";
    this.selectedCourse = new Course();

    this.selectedAssignmentId="";
    this.selectedAssignment =new Assignment();
      
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
