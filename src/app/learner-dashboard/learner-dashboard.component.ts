import { Component } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';

@Component({
  selector: 'learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent {
    mode : string = "assignment";

    constructor(private socialCodeService: SocialCodeService) {
    }
  
    onMyAssignmentClick() {
      this.mode = "assignment";
    }
    onMyCourseClick(){
      this.mode = "course";
    }
}
