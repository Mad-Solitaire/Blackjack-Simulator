import Phaser from "phaser";
import Deck from "../models/deck";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
    this.load.image("clubA", "assets/tile000.png");
  }

  create() {
    this.add.image(800, 800, "table");
    this.add.image(200, 200, "clubA");
    this.deck = this.createDeck();
  }

  createDeck() {
    const deck = new Deck();
    console.log(deck);
  }
}
