import Phaser from "phaser";
import Deck from "../models/deck";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
    this.load.image('card', 'assets/cards/PNG-cards-1.3/2_of_diamonds.png')
  }
  
  create() {

    this.add.image(600, 600, "table");
    this.add.image(600, 600,'card');
    this.deck = this.createDeck();
  }

  createDeck() {
    const deck = new Deck();
    console.log(deck);
  }
}
