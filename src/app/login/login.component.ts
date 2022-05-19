import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  redirect:boolean=false;
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(form)
  {
    this.service.loginUser(this.user).subscribe(
       (success)=>{
         alert(success.userRole+" Login Successfully")
        
         if(success.userRole=="ADMIN")
         {
           this.route.navigate(['/admin-dashboard'])
         }
         else
         {
           //this.route.navigate(["/otcproducts"+success.userId])
           this.route.navigate(['/otcproducts'])
         }
         
       },
       (error)=>{
          alert("Invalid UserName or Password");
       }

    )
  }

  signUp()
  {
    this.route.navigateByUrl("/registration");
    //this.route.navigate(['/register'])
  }
  
}