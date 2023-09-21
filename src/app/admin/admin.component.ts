import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

    constructor(private socialCodeService: SocialCodeService) {
    }

    registerStudent() {
        console.log("Register student called....");
    }

    registerTeacher() {
        console.log("Register teacher called....");
    }

    assignCourse() {
        console.log("Assign course called....");
    }

    assignAssignment() {
        console.log("Assign Assignment called....");
    }

    
}
