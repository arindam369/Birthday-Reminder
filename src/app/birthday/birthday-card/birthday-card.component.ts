import { Component, Input } from '@angular/core';
import { Birthday } from '../../models/birthday.model';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrl: './birthday-card.component.css'
})
export class BirthdayCardComponent {
  @Input({required: true}) data : Birthday;
}
