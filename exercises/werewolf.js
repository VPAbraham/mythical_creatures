
class Werewolf {
  constructor (wereName, wereLocation) {
    this.name = wereName;
    this.location = wereLocation;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    if (this.human === true) {
    this.human = false;
    this.wolf = true;
    this.hungry = true;
  } else {
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  }
  eat(victim) {
    if (this.hungry = true) {
      victim.alive = false;
      this.hungry = false;
      this.change();
    } else
  }
}
module.exports = Werewolf;
