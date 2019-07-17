class Pirate {
  constructor (pirateName, pirateJob) {
    this.name = pirateName;
    this.job = pirateJob || 'Scallywag';
    this.cursed = false;
    this.cursing = 0;
    this.booty = 0;
  }
  commitHeinousAct () {
    this.cursing++
    console.log (this.cursing)
    if (this.cursing >= 3) {
      this.cursed = true;
    }
  }
  robShip () {
    this.booty += 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;
