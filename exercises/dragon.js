class Dragon {
  constructor (dragonName, dragonRider, dragonColor) {
    this.name = dragonName;
    this.rider = dragonRider;
    this.color = dragonColor;
    this.hungry = true;
    this.food = 0;
  }
  eat () {
    this.food++
  if (this.food >= 3) {
    this.hungry = false;    
  }
  }
}

module.exports = Dragon;