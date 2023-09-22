import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
    mode : string ="Learner";
    constructor(private socialCodeService: SocialCodeService) {
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
    }

    
}
