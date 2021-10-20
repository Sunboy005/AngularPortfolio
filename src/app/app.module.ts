import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { appRoutes } from './components/routes';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { PortfolioService } from './_services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    SkillsComponent,
    AboutComponent,
    ContactsComponent,
    FooterComponent,
    PortfolioDetailsComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),    
    HttpClientModule
  ],
  providers: [
    PortfolioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
