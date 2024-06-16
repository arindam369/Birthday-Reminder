import { Component } from '@angular/core';
import { Birthday } from '../../models/birthday.model';
import { dummyBirthdays } from '../../dummy-birthday';

@Component({
  selector: 'app-view-birthdays',
  templateUrl: './view-birthdays.component.html',
  styleUrl: './view-birthdays.component.css'
})

export class ViewBirthdaysComponent {
  allBirthdays: Birthday[] = dummyBirthdays;

  get fetchBirthdays(){
    return this.allBirthdays;
  }
}