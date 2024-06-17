import { Component, inject } from '@angular/core';
import { BirthdayService } from '../../services/BirthdayService';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrl: './upcoming-birthdays.component.css'
})
export class UpcomingBirthdaysComponent {
  private birthdayService = inject(BirthdayService);

  get fetchUpcomingBirthdays(){
    return this.birthdayService.viewAllUpcomingBirthdays();
  }
}
