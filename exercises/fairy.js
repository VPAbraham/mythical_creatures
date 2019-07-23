class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.clothes = {
      dresses:['Iris']
    }
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers){
    var dressArr = this.clothes.dresses;
    for (var i = 0; i < flowers.length; i++)
    dressArr.push(flowers[i]);
}

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    }
    if (this.humanWards.length >=3){
      this.disposition = 'Good natured';
    }
      return (infant);
}

}


module.exports = Fairy;
