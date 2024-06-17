import { Component, Input, inject } from '@angular/core';
import { Birthday } from '../../models/birthday.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { BirthdayService } from '../../services/BirthdayService';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrl: './birthday-card.component.css'
})
export class BirthdayCardComponent {
  @Input({required: true}) data : Birthday;
  faTrash = faTrash;

  private birthdayService = inject(BirthdayService);

  findBirthMonth(monthNumber: string){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[+monthNumber-1];
  }

  onDeleteBirthday(){
    this.birthdayService.removeBirthday(this.data.id);
  }

  get dayDifference(){
    const daysLeft = this.birthdayService.findDaysLeft(this.data.day, this.data.month);
    if(daysLeft <= -1) return "birthday gone";
    else if(-1< daysLeft && daysLeft <= 0) return "birthday today";
    else return Math.round(daysLeft)+"d left";
  }
  get isUpcoming(){
    const daysLeft = this.birthdayService.findDaysLeft(this.data.day, this.data.month);
    if(daysLeft >= -1 && daysLeft <= 30) return true;
    return false;
  }
}
