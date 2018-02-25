import { Component, OnInit } from '@angular/core';
import { Courses, DataBaseService } from '../../data-base.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Courses;

  constructor(private dataBaseService: DataBaseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.course = this.dataBaseService.getCourseByIdObs(param.get('id'));
    });
  }

}
