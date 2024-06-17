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
}
