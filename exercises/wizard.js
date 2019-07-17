class Wizard {
  constructor (obj) {
    this.name = obj.name;
    this.bearded = obj.bearded;
    this.action = 0;
    this.isRested = true;
    if (this.action >= 3) {
      this.isRested = false;
    }
    if (this.bearded === undefined) {
      this.bearded = true;
    }


  }
  incantation (chant) {
    return chant.toUpperCase();
  }
  cast () {
    this.action++;
    if (this.action >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
    return 'MAGIC BULLET';
  }
}

module.exports = Wizard;
