import Phaser from "phaser";

import GameScene from "./scenes/GameScene";
import BuyInScene from "./scenes/BuyInScene";


const config = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  dom: {
    createContainer: true
  },
  // mode: Phaser.Scale.FIT,
  // autoCenter: Phaser.Scale.CENTER_BOTH,
  width: 1000,
  height: 1000,
  scene: [BuyInScene, GameScene],
};

export default new Phaser.Game(config);