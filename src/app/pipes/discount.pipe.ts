import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(price: any, offer:boolean): number {
    if(offer)
    {
    if(price>20000)
    {
      return price*(1-0.17);
    }
    else if(price>15000)
    {
      return price*(1-0.14);
    }
    else if(price>11000)
    {
      return price*(1-0.08)
    }
    else{
      return price*(1-0.04);
    }
  }
  else{
    return price;
  }
  }

}
