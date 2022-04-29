import Phaser from "phaser";
import React from "react";
import Deck from "../models/deck";

export default class BuyInScene extends Phaser.Scene {
  constructor() {
    super("buy-in-scene");
  }

  preload() {
    this.load.image("table", "assets/background.png");
   // this.load.image('card', 'assets/cards/PNG-cards-1.3/2_of_diamonds.png')
  }
  
  create() {

    this.add.image(600, 600, "table");
    //this.add.image(600, 600,'card');
    //this.deck = this.createDeck();
    const start = document.createElement('div')
    start.className = "button is-primary"
    start.innerText = "Start Game"

    const buy = document.createElement('div')
    buy.className = "button is-primary"
    buy.innerText = "BUY IN"

    this.add.dom(475,475,start)
        .addListener('click').once('click', () => {
            this.scene.start('game-scene')
        })
    this.add.dom(675,475,buy)
        .addListener('click').once('click', () => {
            console.log('1 billion dollars')
        })
    }
}