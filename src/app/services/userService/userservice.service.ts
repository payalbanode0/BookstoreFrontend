import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token: any;
  constructor(private httpservice: HttpServiceService) {
    this.token = localStorage.getItem("token")
  }
  

  register(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.postService('User/register', reqdata, false, header)
  } 
   login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpservice.postService(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)
  }
  forgotpassword(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpservice.postService('User/ForgotPassword', reqdata, false, header)
  }
  
  resetpassword(reqdata: any, token: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'

      })
    }
    return this.httpservice.putServices('User/ResetPassword', reqdata, false, header)
  }
  
}
