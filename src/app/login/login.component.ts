import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {Item, SocialCodeService} from '../socialcode.service';
import {USER_TYPE} from '../socialcode.service';
import { Person } from '../domain/model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;
  userTypeList: Item[] = USER_TYPE;
  loggedInUser : Person | undefined;

  radioSel:any;
  userTypeSelected:Item = USER_TYPE[0];
  userTypeSelectedValue:number=1;

  userName : string="";
  userPwd : string="";


  constructor(
     private router: Router,
    //private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private socialCodeService: SocialCodeService
  ) {
    //this.createForm();
  }

  ngOnInit() {}

  login() {
    this.isLoading = true;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }

  getSelecteditem(item : Item)  {
    this.radioSel = this.userTypeList.find(Item => Item.value == this.userTypeSelectedValue);
  }
  
  onItemChange(item : Item){
    this.getSelecteditem(item);
  }

  onLoginClick() {
    
    
    //get login id and save it to variable
    this.loggedInUser = new  Person();
    this.loggedInUser.userId ="10";
    this.loggedInUser.email =this.userName;
    this.socialCodeService.setLogggedInUser(this.loggedInUser);
   
    //move to main app dashboard
    if(this.radioSel.name == "TEACHER" )
      this.router.navigate(['/teacher-dashboard']);
    else if(this.radioSel.name =="ADMIN")
      this.router.navigate(['/admin']);
    else 
       this.router.navigate(['/learner-dashboard']);

  }
}
