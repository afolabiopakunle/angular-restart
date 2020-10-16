import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  isLoggedIn = false;
  likes = 121;
  checkState() {
    this.isLoggedIn = !this.isLoggedIn;
    this.isLoggedIn ? this.likes++ : this.likes--
  }
  constructor() { }

  ngOnInit(): void {
  }

}
