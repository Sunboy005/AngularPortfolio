import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

 private base:string="http://sq009pod2.herokuapp.com"
 private userId:string="7b0ab646-ab4c-464d-a343-83836e1ec315"

 constructor(private myHttp:HttpClient,private spinnerService:SpinnerService) {}

getPortfolioData(){
  
  this.spinnerService.requestStarted();
  const header =new HttpHeaders({
      "userId":this.userId
    })
    this.spinnerService.requestEnded();
    return this.myHttp.get(`${this.base}/api/User`,{
      headers: header})
  }
}

