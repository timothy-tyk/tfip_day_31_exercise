export interface Card {
  suit: string;
  value: number;
}

export interface Hand {
  name: string;
  cards: Card[];
}
