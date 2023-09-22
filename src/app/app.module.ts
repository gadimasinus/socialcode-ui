import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/studentList.component';
import { CoursesComponent } from './courses/courses.component';
import { SocialCodeService } from './socialcode.service';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { LearnerDashboardComponent } from './learner-dashboard/learner-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListComponent,
    CoursesComponent,
    AdminComponent,
    TeacherDashboardComponent,
    LearnerDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'student-list', component: StudentListComponent},
      {path: 'course-list', component: CoursesComponent},
      {path: 'teacher-dashboard', component: TeacherDashboardComponent},
      {path: 'learner-dashboard', component: LearnerDashboardComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'}
    ]),
  ],
  providers: [SocialCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
