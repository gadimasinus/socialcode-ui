import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from '../socialcode.service';
import { Assignment, Person } from '../domain/model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    loggedUser : Person | undefined;
    constructor(private socialCodeService: SocialCodeService) {
        
    }

    ngOnInit(): void {
        this.loggedUser = this.socialCodeService.getLoggedInUser();
    console.log("logged user" + JSON.stringify(this.loggedUser));
    }
}