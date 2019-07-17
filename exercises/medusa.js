class Medusa {
  constructor (medusaName) {
    this.name = medusaName;
    this.statues = [];
  }
  stare(guy) {
    this.statues.push(guy);
    (guy).isStoned = true;
    if (this.statues.length > 3) {
      // (guy).isStoned = false;
      (guy).isStoned = false;
      this.statues.shift([0]);

    }
  }
}

module.exports = Medusa;
