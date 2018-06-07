import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';
import {OfferService} from '../services/offer.service';
import { setTimeout } from 'timers';
@Directive({
  selector: '[offer]'
})
export class OfferDirective {

  constructor(private template:TemplateRef<any>,private view:ViewContainerRef,private os:OfferService) { }

  @Input() set offer(data)
  {
    if(this.os.offerday)
    {
      this.view.createEmbeddedView(this.template);
      setTimeout(()=>this.view.clear(),data*1000);
    }
    else
    {
      this.view.clear() ;
    }
  }

}
