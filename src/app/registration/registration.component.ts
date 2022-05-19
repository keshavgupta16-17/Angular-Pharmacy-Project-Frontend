import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  isSelected:string="USER";
  constructor(private service:UserService,private router:Router) { }
  sliderArray: object[];
  
  ngOnInit() {
  //: void {

    /*this.service.getData().subscribe(
      (result : Result)=>
             {
               this.sliderArray=result.sliderArray;
               console.log(this.sliderArray);
               
             }
    )*/
    
  }
  onClickSubmit(user)
  {
  
    this.service.registerUser(user).subscribe(
      (success)=>{
        alert("User Successfully Added");
        this.router.navigate(['/login'])
      },
      (error)=>{
         alert("User Name or Email or Number Already Exist");
      }
    ) 
  }
  login(){
    this.router.navigateByUrl("/login");
  }
  
}