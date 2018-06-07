import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
name:string;
email:string;
message:string;
errors:boolean=false;
errorlist:string[];
sending:boolean=false;
imagename:string="loader.gif"
  constructor(private enquiryService:EnquiryService) { }

  ngOnInit() {
  }
  sendEnquiry()
  {
    this.imagename="loader.gif";
    this.errors=false;
    this.errorlist=[];
    let regex=/^[a-z][a-z_\.0-9]+@[a-z]+[\.][a-z]{3,5}$/;
    if(!this.name)
    {
this.errorlist.push('Name must be filled');
    }
    if(!this.email)
    {
this.errorlist.push('email must be filled');
    }
    else if(!regex.test(this.email))
    {
      this.errorlist.push("should be in email format")
    }
    if(!this.message)
    {
      this.errorlist.push("message must be filled");

    }
    this.errors=this.errorlist.length>0;
    if(!this.errors)
    {
      this.sending=true;
    }
    this.enquiryService.sendEnquiry({name:this.name,message:this.message,email:this.email}).subscribe((data)=>{

this.imagename="sent.gif";
setTimeout(()=>
{
this.sending=false
this.name=this.message=this.email="";

},2000);
    },
  ()=>{
    this.sending=false
    this.name=this.message=this.email="";
    alert("Enquiry not sent");
  })
  }

}
