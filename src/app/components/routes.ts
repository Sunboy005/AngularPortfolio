import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
import { PortfolioDetailsComponent } from "./portfolio-details/portfolio-details.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { SkillsComponent } from "./skills/skills.component";


export const appRoutes:Routes=[{path:"", component:HomeComponent},
                            {path:"home", component:HomeComponent},
                            {path:"about", component:AboutComponent},
                            {path:"portfolio", component:PortfolioComponent},
                            {path:"contacts", component:ContactsComponent},
                            {path:"skills", component:SkillsComponent},
                            {path:"portfolio-details", component:PortfolioDetailsComponent}]