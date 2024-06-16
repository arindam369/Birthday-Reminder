import { Component } from '@angular/core';

@Component({
  selector: 'app-add-birthday',
  templateUrl: './add-birthday.component.html',
  styleUrl: './add-birthday.component.css'
})
export class AddBirthdayComponent {
  get generateDays(){
    const days = [];
    for(let day=1; day<=31; day++) days.push(day);
    return days;
  }
  get generateMonths(){
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
}
