import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Course, Person } from '../domain/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    mode : string ="Learner";
    person!: Person;
    status : string ="";
    course!: Course;
    
    constructor(private socialCodeService: SocialCodeService) {
        this.person = new Person();
        
        
    }
    ngOnInit(): void {
    
    }

    registerStudent() {
        this.mode="Learner";
        console.log("Register student called....");
    }

    registerTeacher() {
        this.mode="Teacher";
        
        console.log("Register teacher called....");
        this.cleanUp();
    }

    registerCourse() {
        this.mode="Course";
        console.log("Assign course called....");
        this.cleanUp();
    }

    assignAssignment() {
        console.log("Assign Assignment called....");
        this.cleanUp();
    }
    registerClicked() {
        console.log("Register called for " + this.mode );
        
        if(this.mode =="Teacher" || this.mode=="Learner"){
            this.person.userType = this.mode;
            console.log(this.person);
            this.socialCodeService.registerUser(this.person).subscribe(
                (savedPerson: Person) => {
                    console.log(savedPerson)
                    this.status = JSON.stringify(savedPerson);
                }
            )
        } else {
            console.log("register course here...." );
            console.log(this.course);
            this.socialCodeService.registerCourse(this.course).subscribe(
                (savedCourse: Course) => {
                    console.log(savedCourse)
                    this.status = JSON.stringify(savedCourse);
                }
            )
        }
       
    }

    cleanUp() {
        this.person = new Person();
        this.course = new Course();
        this.status ="";
    }

    
}
