import Phaser from "phaser";
import Deck from "../models/deck";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
    //clubs
    this.load.image("clubsA", "assets/ace_of_clubs.png");
    this.load.image("clubs2", "assets/2_of_clubs.png");
    this.load.image("clubs3", "assets/3_of_clubs.png");
    this.load.image("clubs4", "assets/4_of_clubs.png");
    this.load.image("clubs5", "assets/5_of_clubs.png");
    this.load.image("clubs6", "assets/6_of_clubs.png");
    this.load.image("clubs7", "assets/7_of_clubs.png");
    this.load.image("clubs8", "assets/8_of_clubs.png");
    this.load.image("clubs9", "assets/9_of_clubs.png");
    this.load.image("clubs10", "assets/10_of_clubs.png");
    this.load.image("clubsJ", "assets/jack_of_clubs2.png");
    this.load.image("clubsQ", "assets/queen_of_clubs2.png");
    this.load.image("clubsK", "assets/king_of_clubs2.png");
    //spades
    this.load.image("spadesA", "assets/ace_of_spades.png");
    this.load.image("spades2", "assets/2_of_spades.png");
    this.load.image("spades3", "assets/3_of_spades.png");
    this.load.image("spades4", "assets/4_of_spades.png");
    this.load.image("spades5", "assets/5_of_spades.png");
    this.load.image("spades6", "assets/6_of_spades.png");
    this.load.image("spades7", "assets/7_of_spades.png");
    this.load.image("spades8", "assets/8_of_spades.png");
    this.load.image("spades9", "assets/9_of_spades.png");
    this.load.image("spades10", "assets/10_of_spades.png");
    this.load.image("spadesJ", "assets/jack_of_spades2.png");
    this.load.image("spadesQ", "assets/queen_of_spades2.png");
    this.load.image("spadesK", "assets/king_of_spades2.png");
    //hearts
    this.load.image("heartsA", "assets/ace_of_hearts.png");
    this.load.image("hearts2", "assets/2_of_hearts.png");
    this.load.image("hearts3", "assets/3_of_hearts.png");
    this.load.image("hearts4", "assets/4_of_hearts.png");
    this.load.image("hearts5", "assets/5_of_hearts.png");
    this.load.image("hearts6", "assets/6_of_hearts.png");
    this.load.image("hearts7", "assets/7_of_hearts.png");
    this.load.image("hearts8", "assets/8_of_hearts.png");
    this.load.image("hearts9", "assets/9_of_hearts.png");
    this.load.image("hearts10", "assets/10_of_hearts.png");
    this.load.image("heartsJ", "assets/hearts_of_hearts2.png");
    this.load.image("heartsQ", "assets/queen_of_hearts2.png");
    this.load.image("heartsK", "assets/king_of_hearts2.png");
    //diamonds
    this.load.image("diamondsA", "assets/ace_of_diamonds.png");
    this.load.image("diamonds2", "assets/2_of_diamonds.png");
    this.load.image("diamonds3", "assets/3_of_diamonds.png");
    this.load.image("diamonds4", "assets/4_of_diamonds.png");
    this.load.image("diamonds5", "assets/5_of_diamonds.png");
    this.load.image("diamonds6", "assets/6_of_diamonds.png");
    this.load.image("diamonds7", "assets/7_of_diamonds.png");
    this.load.image("diamonds8", "assets/8_of_diamonds.png");
    this.load.image("diamonds9", "assets/9_of_diamonds.png");
    this.load.image("diamonds10", "assets/10_of_diamonds.png");
    this.load.image("diamondsJ", "assets/diamonds_of_diamonds2.png");
    this.load.image("diamondsQ", "assets/queen_of_diamonds2.png");
    this.load.image("diamondsK", "assets/king_of_diamonds2.png");
  }

  create() {
    this.add.image(700, 700, "table");
    // this.add.image(100, 200, "clubsA").setScale(0.2);
    // this.add.image(200, 200, "clubs2").setScale(0.2);
    // this.add.image(300, 200, "clubs3").setScale(0.2);
    // this.add.image(400, 200, "clubs4").setScale(0.2);
    // this.add.image(500, 200, "clubs5").setScale(0.2);
    // this.add.image(600, 200, "clubs6").setScale(0.2);
    // this.add.image(700, 200, "clubs7").setScale(0.2);
    // this.add.image(100, 350, "clubs8").setScale(0.2);
    // this.add.image(200, 350, "clubs9").setScale(0.2);
    // this.add.image(300, 350, "clubs10").setScale(0.2);
    // this.add.image(400, 350, "clubsJ").setScale(0.2);
    // this.add.image(500, 350, "clubsQ").setScale(0.2);
    // this.add.image(600, 350, "clubsK").setScale(0.2);
    // this.add.image(700, 350, "spadesA").setScale(0.2);
    // this.add.image(100, 500, "heartsA").setScale(0.2);
    // this.add.image(200, 500, "diamondsA").setScale(0.2);

    this.player = {
      balance: 0,
      hand: [],
      cardTotal: 0,
    };

    this.dealer = {
      hand: [],
      cardTotal: 0,
    };

    let newDeck = this.createDeck();
    console.log(newDeck);

    this.drawPlayerCard(newDeck);
    this.drawPlayerCard(newDeck);

    this.drawDealerCard(newDeck);
    this.drawDealerCard(newDeck);

    console.log("PLAYER");
    console.log(this.player);

    console.log("DEALER");
    console.log(this.dealer);
  }

  createDeck() {
    let newDeck = new Deck();
    newDeck.shuffleDeck();
    return newDeck;
  }

  drawPlayerCard(deck) {
    let drawn = deck.cards.pop();

    this.player.hand.push(drawn);

    let value = drawn.value;

    if (value === "J" || value === "Q" || value === "K") {
      this.player.cardTotal += 10;
    } else if (value === "A") {
      let total = this.player.cardTotal + 11;
      this.player.cardTotal += total > 21 ? 1 : 11;
    } else {
      this.player.cardTotal += Number(value);
    }

    let cardName = drawn.suit + drawn.value;

    if (this.player.hand.length === 0) {
      this.add.image(200, 500, cardName).setScale(0.2);
    } else {
      let placement = this.player.hand.length * 50 + 200;
      this.add.image(placement, 500, cardName).setScale(0.2);
    }
  }

  drawDealerCard(deck) {
    let drawn = deck.cards.pop();

    this.dealer.hand.push(drawn);

    let value = drawn.value;

    if (value === "J" || value === "Q" || value === "K") {
      this.dealer.cardTotal += 10;
    } else if (value === "A") {
      let total = this.dealer.cardTotal + 11;
      this.dealer.cardTotal += total > 21 ? 1 : 11;
    } else {
      this.dealer.cardTotal += Number(value);
    }

    let cardName = drawn.suit + drawn.value;

    if (this.dealer.hand.length === 0) {
      this.add.image(200, 300, cardName).setScale(0.2);
    } else {
      let placement = this.dealer.hand.length * 50 + 200;
      this.add.image(placement, 300, cardName).setScale(0.2);
    }
  }

  resetHands() {
    this.player.hand = [];
    this.dealer.hand = [];
  }
}
