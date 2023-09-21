import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { SocialCodeService } from './socialcode.service';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    CoursesComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'student-list', component: StudentComponent},
      {path: 'course-list', component: CoursesComponent},
      {path: 'admin', component: AdminComponent},
      {path: '', redirectTo: '/student-list', pathMatch: 'full'}
    ]),
  ],
  providers: [SocialCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
