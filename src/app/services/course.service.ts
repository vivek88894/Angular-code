import { Injectable } from '@angular/core';
import {course} from '../course';
@Injectable()
export class CourseService {
private courses:course[];
  constructor() {
    this.courses=[
      {
        name:'Angular 4',image:'angular2.png',description:'Googles single page app framework',price:22000
      },
      {
        name:'Asp.net',image:'asp.net.png',description:'Microsoft server side script',price:12000
      },
      {
        name:'Amazon web services',image:'aws.png',description:'Leading cloud services',price:18000
      },
       {
        name:'Javascript',image:'javascript.jpg',description:'Client side scripting framework',price:25000
      },
      {
        name:'SAP',image:'sap.jpeg',description:'Famous ERP tools',price:21500
      },
      {
        name:'SQL',image:'SQL.png',description:'Relational database query language',price:23000
      }, {
        name:'React',image:'react.png',description:'Client side javascript framework',price:29000
      }, {
        name:'Microsoft dynamics',image:'microsoft dynamics.jpeg',description:'Microsoft erp tool',price:26000
      },
      {
        name:'JAVA',image:'java.png',description:'Open source service side language',price:27500
      },
      {
        name:'Node',image:'node.png',description:'Server side javascript framework',price:28500
      }, {
        name:'Azure',image:'azure.png',description:'Microsoft cloud',price:29123
      }, {
        name:'Ember',image:'ember.png',description:'ember js course',price:26854
      }
    ]
   }
   getCourses():course[]{
     return this.courses;
   }

}
