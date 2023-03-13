import { Card, Hand } from './models';

export class Utils {
  static createCardDeck() {
    const cardDeck: Card[] = [];
    const suits = ['clover', 'diamond', 'heart', 'spade'];
    for (let s of suits) {
      for (let i = 1; i <= 13; i++) {
        const newCard: Card = {
          suit: s,
          value: i,
        };
        cardDeck.push(newCard);
      }
    }
    return cardDeck;
  }

  static shuffleCardDeck(cards: Card[]) {
    for (let i = 0; i < cards.length; i++) {
      const randomNo = Math.floor(Math.random() * cards.length);
      const placeholderCard = cards[i];
      cards[i] = cards[randomNo];
      cards[randomNo] = placeholderCard;
    }
    return cards;
  }

  static dealCards(deck: Card[], playerName: string, noOfCards: number) {
    const playerCards: Card[] = [];
    for (let i = 0; i < noOfCards; i++) {
      const nextCard: Card = deck.pop()!;
      playerCards.push(nextCard);
    }
    const playerHand: Hand = {
      name: playerName,
      cards: playerCards,
    };
    return playerHand;
  }
}
