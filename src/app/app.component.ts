import { Component, OnInit } from '@angular/core';
import { SocialCodeService } from './socialcode.service';
import { Person } from './domain/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Social Code';
  apiVersion :string ='';
  loggedUser : Person | undefined;
  constructor(private socialCodeService: SocialCodeService) {
  }
  ngOnInit(): void {
   /* this.socialCodeService.getversion().subscribe((serviceVersion : string) =>{
      console.log(serviceVersion);
       this.apiVersion = serviceVersion;
    });*/

    this.loggedUser = this.socialCodeService.getLoggedInUser();
    console.log("logged user" + JSON.stringify(this.loggedUser));
  }
}
