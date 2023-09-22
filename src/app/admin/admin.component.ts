import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Person } from '../domain/model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    mode : string ="Learner";
    person!: Person;
    constructor(private socialCodeService: SocialCodeService) {
        this.person = new Person();
    }

    registerStudent() {
        this.mode="Learner";
        console.log("Register student called....");
    }

    registerTeacher() {
        this.mode="Teacher";
        
        console.log("Register teacher called....");
    }

    registerCourse() {
        this.mode="Course";
        console.log("Assign course called....");
    }

    assignAssignment() {
        console.log("Assign Assignment called....");
    }
    registerClicked() {
        console.log("Register called for " + this.mode );
        console.log(this.person);
        this.socialCodeService.registerUser(this.person).subscribe(
            (savedPerson: Person) => {
                console.log(savedPerson)
            }
        )
    }

    
}
