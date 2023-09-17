import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(
   // private router: Router,
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
}
