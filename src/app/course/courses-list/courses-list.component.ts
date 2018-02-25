import { Component, OnInit } from '@angular/core';
import { Courses, DataBaseService } from '../../data-base.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

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
