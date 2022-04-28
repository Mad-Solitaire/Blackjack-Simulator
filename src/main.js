import Phaser from "phaser";

import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  // mode: Phaser.Scale.FIT,
  // autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 800,
  height: 800,
  scene: [GameScene],
};

export default new Phaser.Game(config);
