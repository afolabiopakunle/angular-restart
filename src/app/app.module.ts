import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { StudentsService } from './students.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
