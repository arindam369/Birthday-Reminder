import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddBirthdayComponent } from './birthday/add-birthday/add-birthday.component';
import { ViewBirthdaysComponent } from './birthday/view-birthdays/view-birthdays.component';
import { BirthdayCardComponent } from './birthday/birthday-card/birthday-card.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpcomingBirthdaysComponent } from './birthday/upcoming-birthdays/upcoming-birthdays.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddBirthdayComponent,
    ViewBirthdaysComponent,
    BirthdayCardComponent,
    UpcomingBirthdaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // configure the router with the routes
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
