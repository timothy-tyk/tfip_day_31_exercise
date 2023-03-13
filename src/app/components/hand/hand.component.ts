import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand } from 'src/app/models';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css'],
})
export class HandComponent {
  @Input() name!: string;
  @Input() hand!: Hand;
  @Output() deleteCard: Subject<number> = new Subject<number>();

  removeCard(idx: number) {
    this.deleteCard.next(idx);
  }
}
