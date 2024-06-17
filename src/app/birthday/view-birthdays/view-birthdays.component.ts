import { Component, inject } from '@angular/core';
import { BirthdayService } from '../../services/BirthdayService';

@Component({
  selector: 'app-view-birthdays',
  templateUrl: './view-birthdays.component.html',
  styleUrl: './view-birthdays.component.css'
})

export class ViewBirthdaysComponent {
  private birthdayService = inject(BirthdayService);

  get fetchBirthdays(){
    return this.birthdayService.viewAllBirthdays();
  }
}