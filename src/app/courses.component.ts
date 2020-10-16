import { Component, OnInit } from "@angular/core"
import { CoursesService } from './courses.service';
import { StudentsService } from './students.service';


@Component({
    selector: "courses",
    template: `<div [class.loggedIn]="true" class="container">
    <h2>{{ getCoursesList() }}</h2>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <h2>Students</h2>
    <ul>
        <li *ngFor="let student of students">
        {{ student }}
        </li>
    </ul>
    <button class="btn btn-outline-primary" (click)="checkState()">Save</button> <br /><br />
    <img [src]="imageURL"/>
    </div>
    `
})

export class CoursesComponent implements OnInit {
    title = "List of courses";
    imageURL = "https://picsum.photos/400/200"
    courses;
    students;
    getCoursesList() {
        return this.title + " from functions"
    }

    constructor(service: CoursesService, students: StudentsService) {
        this.courses = service.getCourses();
        this.students = students.students;
     }
  
    ngOnInit(): void {
    }
  
  }