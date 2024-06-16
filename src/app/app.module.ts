import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddBirthdayComponent } from './birthday/add-birthday/add-birthday.component';
import { ViewBirthdaysComponent } from './birthday/view-birthdays/view-birthdays.component';
import { BirthdayCardComponent } from './birthday/birthday-card/birthday-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddBirthdayComponent,
    ViewBirthdaysComponent,
    BirthdayCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
