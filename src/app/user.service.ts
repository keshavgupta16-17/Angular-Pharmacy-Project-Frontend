import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  
  baseUrl:string="http://localhost:9393/";
   
  getData() {
    return this.http.get("../assets/slideData.json")
  }
   
  public loginUser(user:User):Observable<User>
  {
    console.log(this.baseUrl+"login");
    return this.http.post<User>(this.baseUrl+"login",user);
  } 

  public registerUser(user:User):Observable<User>
  {
    console.log(this.baseUrl+"register");
    return this.http.post<User>(this.baseUrl+"register",user);
  }
}