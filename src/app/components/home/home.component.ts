import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/_models/home';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myBios:Home={
    firstName:"",
    lastName:"",
    about:"",
    email:"",
    socialMedia:"",
    linkedIn:"",
    github:"",
    phone:""

  };
  constructor(private myHttp:PortfolioService) { }

  ngOnInit(): void {
    this.myHttp
    .getPortfolioData()
    .subscribe(
      (response:any)=>{
        this.myBios.firstName = response.data.firstName
        this.myBios.lastName = response.data.lastName
        this.myBios.phone = response.data.contact.phone
        this.myBios.email = response.data.contact.email
        this.myBios.linkedIn = response.data.contact.linkedIn
        this.myBios.socialMedia = response.data.contact.socialMedia
        this.myBios.github = response.data.contact.github
      }
     
      )
  }

}
