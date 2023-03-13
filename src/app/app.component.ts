import { Component, OnInit } from '@angular/core';
import { Card, Hand } from './models';
import { Utils } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cardgame';
  cards: Card[] = [];
  players = ['fred', 'barney', 'wilma', 'betty'];
  noOfCards: number = 5;
  hands: Hand[] = [];

  ngOnInit(): void {
    this.cards = Utils.createCardDeck();
    this.cards = Utils.shuffleCardDeck(this.cards);
    for (let p of this.players) {
      const hand = Utils.dealCards(this.cards, p, this.noOfCards);
      this.hands.push(hand);
    }
  }

  deleteCard(name: string, e: any): void {
    const playerHand = this.hands.find((v) => v.name == name);
    playerHand?.cards.splice(e, 1);
  }
}
