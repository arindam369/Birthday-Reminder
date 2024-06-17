import { Component, inject } from '@angular/core';
import { BirthdayService } from '../../services/BirthdayService';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrl: './add-birthday.component.css'
})
export class AddBirthdayComponent {
  private birthdayService = inject(BirthdayService);

  formData = {
    enteredName: "",
    enteredDay: "",
    enteredMonth: ""
  }

  get generateDays(){
    const days = [];
    for(let day=1; day<=31; day++) days.push(day);
    return days;
  }
  get generateMonths(){
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }

  onAddBirthday(){
    const data = {
      name: this.formData.enteredName,
      day: this.formData.enteredDay,
      month: this.formData.enteredMonth,
    }
    this.birthdayService.addBirthday(data);
    this.formData = {enteredName: "", enteredDay: "", enteredMonth: ""};
  }
}
