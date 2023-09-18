import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { SocialCodeService } from './socialcode.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    CoursesComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'student-list', component: StudentComponent},
      {path: 'course-list', component: CoursesComponent},
      {path: '', redirectTo: '/student-list', pathMatch: 'full'}
    ]),
  ],
  providers: [SocialCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
