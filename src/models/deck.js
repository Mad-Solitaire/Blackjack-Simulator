const SUITS = ["diamonds", "clubs", "spades", "hearts"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }

  get deckQuantity() {
    return this.cards.length;
  }

  shuffleDeck() {
    for (let i = this.deckQuantity - 1; i > 0; i--) {
      const newPosition = Math.floor(Math.random() * (i + 1));
      const oldPosition = this.cards[newPosition];
      this.cards[newPosition] = this.cards[i];
      this.cards[i] = oldPosition;
    }
  }
}

class Cards {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function newDeck() {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Cards(suit, value);
    });
  });
}
