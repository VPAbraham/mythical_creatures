
class Centaur {
  constructor (name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.action = 0;
  this.layingDown = false;

  }


  shoot() {
    this.action++
    if (this.action >= 3){
      this.cranky = true;
      return 'NO!'
    } else {
      return 'Twang!!!'
    }
  }
  run () {
    this.action++
    if (this.action >= 3){
      this.cranky = true;
      return 'NO!'
    } else {
    return 'Clop clop clop clop!!!'
    }
  }

  sleep () {
    if (this.layingDown = false) {
      return 'NO!'
    }
    if (this.layingDown = true) {
      this.isRested = true;
      this.cranky = false;
      this.action = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
    this.action = 3;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
    this.action = 0;
  }
}
module.exports = Centaur;
