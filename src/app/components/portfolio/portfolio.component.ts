import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/_models/portfolio';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  myPortfolio:Portfolio[]= [];
  constructor(private myHttp:PortfolioService) { }

  ngOnInit(): void {
    this.myHttp
    .getPortfolioData()
    .subscribe(
      (response:any)=>{
        this.myPortfolio=response.data.portfolio
        }
     
      )
  }

}
