import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/_models/skills';
import { PortfolioService } from 'src/app/_services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  mySkills:Skills[]= [];
  constructor(private myHttp:PortfolioService) { }

  ngOnInit(): void {
    this.myHttp
    .getPortfolioData()
    .subscribe(
      (response:any)=>{
        this.mySkills=response.data.skills}
     
      )
  }

}
