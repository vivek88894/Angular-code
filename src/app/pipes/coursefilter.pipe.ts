import { Pipe, PipeTransform } from '@angular/core';
import {course} from '../course';
@Pipe({
  name: 'coursefilter'
})
export class CoursefilterPipe implements PipeTransform {

  transform(courses:course[],pricetype:string): any {
    let temp=[];
    if(pricetype=="Heavily priced")
    {
      for(let x in courses)
      {
        if(courses[x].price>19000)
        {
temp.push(courses[x]);
        }
      }
    }
  
    else if(pricetype=="Moderately priced"){

      temp=courses.filter(x=>x.price<19000);
    } 
    else if(pricetype=="Normally priced"){

      temp=courses.filter(x=>x.price<12000);
    } 
    else 
{
      temp=courses;
}
      return temp;
  }
 

}
