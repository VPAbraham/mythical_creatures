class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  attemptAnswer(answer) {
    for(var i = 0; i < this.riddles.length; i++)
    if (answer === this.riddles[i].answer){
      this.riddles.splice(i, 1)
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    }
    this.heroesEaten++
  }
// couldn't quite get a solution working for the last test
}

module.exports = Sphinx;
