/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
import Ship from './ship';
import Board from './gameboard';
import { randomNumber } from './helper';

const player = (() => ({
  board: new Board(),
  turn: true,
  startPlayer() {
    this.board.setShip(new Ship(5, 'Ship1'), 9, true); // [2]
    this.board.setShip(new Ship(3, 'Ship2'), 55, false); // [22,23]
    this.board.setShip(new Ship(4, 'Ship3'), 80, false); // [33,43,53]
    // this.board.setShip(new Ship(1, 'Ship1'), Math.floor((Math.random() * 99) + 1), false); // [1]
  },

  setupRandomShips() {
    let vertical = true;
    while (this.board.deployedShips.length < 6) {
      const len = randomNumber(4) + 1;
      const pos = randomNumber(99);
      vertical = !vertical;
      this.board.setShip(new Ship(len, 'Ship1'), pos, vertical);
    }
  },

  attack(player2, posAttack = setTimeout(randomNumber(99), 500)) {
    if (this.turn) {
      const successAttack = player2.board.receiveAttack(posAttack);
      if (!successAttack) {
        this.turn = !this.turn;
        player2.turn = !player2.turn;
      }
      return successAttack;
    }
    return false;
  },
}));

export default player;
