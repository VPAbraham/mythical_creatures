var assert = require('chai').assert;
var Medusa = require('../exercises/medusa');
var Person = require('../exercises/person');

describe('Medusa', function() {

  it.only('should be a function', function() {
    assert.isFunction(Medusa);
  });

  it.only('should instantiate our good friend, Medusa', function() {
    var medusa = new Medusa();
    assert.isObject(medusa);
  });

  it.only('should have a name', function() {
    var medusa = new Medusa('Bree');
    assert.equal(medusa.name, 'Bree');
  });

  it.only('should start with no statues', function() {
    var medusa = new Medusa('Taytay');
    assert.equal(medusa.name, 'Taytay');
    assert.deepEqual(medusa.statues, []);
  });

  // Pass first 3 tests for Person down below

  it.only('should gain a statue when staring at a person', function() {
    var medusa = new Medusa('Brenna');
    var victim = new Person('Jhun');
    medusa.stare(victim);

    assert.equal(medusa.statues.length, 1);
    assert.equal(medusa.statues[0].name, 'Jhun');

  });

  it.only('should only be able to have three victims as a statue', function() {
    var medusa = new Medusa('Meeka');
    var victim1 = new Person('Lousia');
    var victim2 = new Person('Bree');
    var victim3 = new Person('TayTay');
    var victim4 = new Person('Steve');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
  });

  it.only('should unstone the the first victim and stone the 4th coming in', function() {
    // create medusa
    var medusa = new Medusa ('Brenna');
    // create first victim
    var guy1 = new Person('Lousia');
    // create second victim
    var guy2 = new Person('Bree');
    // create third victim
    var guy3 = new Person('TayTay');
    // create fourth victim
    var guy4 = new Person('Steve');
    // medusa stares at first victim
    medusa.stare(guy1);
    // assert that the first victim is stoned
    assert.equal(guy1.isStoned, true);
    // medusa stares at second victim
    medusa.stare(guy2);
    // medusa stares at third victim
    medusa.stare(guy3);
    // medusa stares at fourth victim
    medusa.stare(guy4);
    // assert the fourth victim is stoned
    assert.equal(guy4.isStoned, true);
    // assert that the first victim is not stoned
    assert.equal(guy1.isStoned, false);
  });
})

describe('Person', function() {

  it.only('should be a function', function() {
    assert.isFunction(Person);
  });

  it.only('should instantiate our good friend, Person', function() {
    var person = new Person();
    assert.isObject(person);
  });

  it.only('should have a name', function() {
    var person = new Person('Steve');
    assert.equal(person.name, 'Steve');
  });
  it.only('should be stoned after looking into Medusas eyes', function() {
    var medusa = new Medusa('Brenna');
    var victim = new Person('Jhun');

    assert.equal(victim.stoned, false);
    medusa.stare(victim);
    console.log(victim.stoned)

    assert.equal(victim.stoned, true);
  });
});
