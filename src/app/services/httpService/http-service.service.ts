import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseurl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
 
  postService(Url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseurl + Url, reqdata, token && httpOptions);
  }
  putServices(url: string, reqdata: any, token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + url,reqdata, token && httpOptions)
  }
  getServices(url: string,  token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.get(this.baseurl + url, token && httpOptions)
  }
}
