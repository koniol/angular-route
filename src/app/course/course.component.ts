import { Component, OnInit } from '@angular/core';
import { DataBaseService, Courses } from '../data-base.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Courses>;

  constructor(private dataBaseService: DataBaseService) {
  }

  ngOnInit() {
    this.dataBaseService.getCourses().subscribe(cour => {
      this.courses = cour;
    });
  }

  getCourseById(id: string) {
    return this.dataBaseService.getCourseByIdObs(id);
  }
}
