import Phaser from "phaser";
import React from "react";
import Deck from "../models/deck";

let bank = 0
export default class BuyInScene extends Phaser.Scene {
  constructor() {
    super("buy-in-scene");
    //this.bank = 0
  }

  preload() {
    this.load.image("table", "assets/background.png");
  }
  
  create() {

    this.add.image(600, 600, "table");
    this.add.text(500,50, 'BLACK JACK',{ fontSize: '75px', fontFamily: "Goudy Bookletter 1911", color: 'red'})
    //this.add.image(600, 600,'card');
    //this.deck = this.createDeck();
    const start = document.createElement('div')
    start.className = "button is-primary"
    start.innerText = "Start Game"

    const buy = document.createElement('div')
    buy.className = "button is-link"
    buy.innerText = `buy-in: $${bank}`
    const addOne = document.createElement('div')
    addOne.className = "button is-info"
    addOne.innerText = "$1,000"    
    const addTen = document.createElement('div')
    addTen.className = "button is-warning"
    addTen.innerText = "$5,000"    
    const addHun = document.createElement('div')
    addHun.className = "button is-danger"
    addHun.innerText = "$20,000"

    this.add.dom(450,475,start)
      .addListener('click').once('click', () => {
        this.scene.start('game-scene')
        })
    this.add.dom(600,475,buy)
      .addListener('click').on('click', () => {
            console.log(bank)
        })
    this.add.dom(600,250,addOne)
      .addListener('click').on('click', () => {
        bank = bank + 1000;
        this.add.dom(600,475,buy)
        .addListener('click').on('click', () => {
              console.log(bank)
          })
    })
    this.add.dom(600,325,addTen)
      .addListener('click').on('click', () => {
        bank = bank + 5000;
        this.add.dom(600,475,buy)
        .addListener('click').on('click', () => {
              console.log(bank)
          })

    })
    this.add.dom(600,400,addHun)
      .addListener('click').once('click', () => {
        bank = bank + 20000;
        this.add.dom(600,475,buy)
        .addListener('click').on('click', () => {
              console.log(bank)
          })
    })
  }    
}