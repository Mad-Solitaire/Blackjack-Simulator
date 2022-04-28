import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
  }

  create() {
    this.add.image(400, 300, "table");
  }
}
