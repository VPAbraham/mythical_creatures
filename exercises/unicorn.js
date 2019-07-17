class Unicorn {
  constructor (unicornName, unicornColor = 'white') {
    this.name = unicornName;
    this.color = unicornColor;
  }
  isWhite() {
    if (this.color !== 'white')
    return false;
  }
  says(message) {
    return `**;* ${message} *;**`
  }
}

module.exports = Unicorn;