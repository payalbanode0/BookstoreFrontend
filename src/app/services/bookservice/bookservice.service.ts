import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  token: any;

  constructor(private httpservice: HttpServiceService) {
    this.token = localStorage.getItem("token")

  }
  getbook() {
    this.token = localStorage.getItem("token")
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getServices('Book/GetAllBook', true, headerOption);
  }
  addfeedback(data:any) {
    this.token = localStorage.getItem('token')
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("data")
    return this.httpservice.postService('api/Feedback/AddFeedback', data,true,headerOption);
  }
  getfeedback(data: any) {
    this.token = localStorage.getItem('token')

    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
console.log("reqdata")
    return this.httpservice.getServices(`api/Feedback/Get/${data.bookId}`, true, header)
  }

}
