import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../services/course.service'
import {course} from '../../../course'
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  pricetype:string="All courses";
courses:course[];
  constructor(private cs:CourseService) {
  this.courses=cs.getCourses();
    
   }
  ngOnInit() {
  }

}
