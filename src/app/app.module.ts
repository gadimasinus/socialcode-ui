import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { StudentComponent } from './Student/student.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'student-list', component: StudentComponent},
      {path: 'course-list', component: CoursesComponent},
      {path: '', redirectTo: '/student-list', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
