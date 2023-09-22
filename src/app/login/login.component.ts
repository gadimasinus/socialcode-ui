import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import {Item} from '../socialcode.service';
import {USER_TYPE} from '../socialcode.service';


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

  radioSel:any;
  userTypeSelected:Item = USER_TYPE[0];
  userTypeSelectedValue:number=1;

  constructor(
     private router: Router,
    //private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
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
    console.log(item);
    this.radioSel = this.userTypeList.find(Item => Item.value == this.userTypeSelectedValue);
  }
  // Radio Change Event
  onItemChange(item : Item){
    console.log(item)
    this.getSelecteditem(item);
  }

  onLoginClick() {
    //move to main app dashboard
    console.log(this.loginForm.value);
   
    if(this.radioSel.name == "TEACHER" )
      this.router.navigate(['/teacher-dashboard']);
    else if(this.radioSel.name =="ADMIN")
      this.router.navigate(['/admin']);
    else 
       this.router.navigate(['/learner-dashboard']);

  }
}
