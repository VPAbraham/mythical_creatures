class Vampire {
  constructor (vampireName, vampirePet = 'bat') {
    this.name = vampireName;
    this.pet = vampirePet;
    this.thirsty = true;
  }
  drink () {
    this.thirsty = false;
  }
}

module.exports = Vampire;