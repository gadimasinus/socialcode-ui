import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Assignment } from '../domain/model';

@Component({
  selector: 'learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss']
})
export class LearnerDashboardComponent implements OnInit {
    mode : string = "assignment";
    selectedAssignmentId? : number;
    assignments?: Assignment[]; 
    selectedAssignment? : Assignment;
    fileName?:String;

    constructor(private socialCodeService: SocialCodeService) {
        
    }
    ngOnInit(): void {
        this.socialCodeService.getAllAssignmentById(10).subscribe((responseData: Assignment[]) => {
            console.log(responseData)
            this.assignments = responseData;
          },
          error => {
            console.log("service error " + JSON.stringify(error));
           }
          );
    }
  
    onMyAssignmentClick() {
      this.mode = "assignment";
    }
    onMyCourseClick(){
      this.mode = "course";
    }
    onUploadAssignmentClick(){
        this.mode = "uploadAssignment";
       

    }
    onAssignmentSelected() {
		console.log(this.selectedAssignmentId);
        if(this.assignments) {
            this.selectedAssignment =  this.assignments.find(Item => Item.assignmentId == this.selectedAssignmentId);
        }
        
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
