import Phaser from "phaser";
import Deck from "../models/deck";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
    //clubs
    this.load.image("clubA", "assets/ace_of_clubs.png");
    this.load.image("club2", "assets/2_of_clubs.png");
    this.load.image("club3", "assets/3_of_clubs.png");
    this.load.image("club4", "assets/4_of_clubs.png");
    this.load.image("club5", "assets/5_of_clubs.png");
    this.load.image("club6", "assets/6_of_clubs.png");
    this.load.image("club7", "assets/7_of_clubs.png");
    this.load.image("club8", "assets/8_of_clubs.png");
    this.load.image("club9", "assets/9_of_clubs.png");
    this.load.image("club10", "assets/10_of_clubs.png");
    this.load.image("clubJ", "assets/jack_of_clubs2.png");
    this.load.image("clubQ", "assets/queen_of_clubs2.png");
    this.load.image("clubK", "assets/king_of_clubs2.png");
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
    // this.add.image(100, 200, "clubA").setScale(0.2);
    // this.add.image(200, 200, "club2").setScale(0.2);
    // this.add.image(300, 200, "club3").setScale(0.2);
    // this.add.image(400, 200, "club4").setScale(0.2);
    // this.add.image(500, 200, "club5").setScale(0.2);
    // this.add.image(600, 200, "club6").setScale(0.2);
    // this.add.image(700, 200, "club7").setScale(0.2);
    // this.add.image(100, 350, "club8").setScale(0.2);
    // this.add.image(200, 350, "club9").setScale(0.2);
    // this.add.image(300, 350, "club10").setScale(0.2);
    // this.add.image(400, 350, "clubJ").setScale(0.2);
    // this.add.image(500, 350, "clubQ").setScale(0.2);
    // this.add.image(600, 350, "clubK").setScale(0.2);
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
  }

  drawDealerCard(deck) {
    let drawn = deck.cards.pop();
    this.dealer.hand.push(drawn);
  }

  resetHands() {
    this.player.hand = [];
    this.dealer.hand = [];
  }
}
