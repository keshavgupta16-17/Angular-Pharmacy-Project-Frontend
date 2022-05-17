import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact= new Contact("","","","");

  constructor() { }

  ngOnInit() {
  
   /* onSubmit() {
      console.log(this.contact);
      //code to send data to server
      this._service.enroll(this.contact).subscribe(data => console.log(data), error => console.log(error));
  
      this.contact.name = "";
      this.contact.email = "";
      this.contact.subject = "";
      this.contact.message = "";
     */
  
    }
  
  }