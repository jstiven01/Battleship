const Ship = ((length = 1) => ({
  length,
  position: [0],
  hitsNumber: 0,

  hit() {
    if (!this.isSunk()) this.hitsNumber += 1;
  },

  isSunk() {
    return this.hitsNumber >= this.length;
  },

}));

export default Ship;
