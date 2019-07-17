var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it.only('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it.only('should instantiate our good friend, Werewolf', function() {
    var werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it.only('should have a name', function() {
    var werewolf = new Werewolf('Jorge');
    var werewolf2 = new Werewolf('Sal');
    assert.equal(werewolf.name, 'Jorge');
    assert.equal(werewolf2.name, 'Sal');
  });

  it.only('should have a location', function() {
    var werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it.only('should default to human form', function() {
    var werewolf = new Werewolf('Mike','Basement lair');
    assert.equal(werewolf.human, true);
  });

  it.only('should refute human form after changing', function() {
    var werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert.equal(werewolf.human, false);
  });

  it.only('should show assert wolf form after change', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    assert.equal(werewolf.wolf, true);
  });

  it.only('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it.only('should start off not hungry', function() {
    // your code here
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert.equal(werewolf.hungry, false);
  });

  it.only('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    werewolf.change();
    // your code here
    assert.equal(werewolf.wolf, true)
    assert.equal(werewolf.hungry, true);
  });

  it.only('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jorge');
    assert.equal(werewolf.hungry, false);
    assert.equal(victim.alive, true);
    werewolf.eat(victim);

    // your code here
  });

  it.only('should not be hungry after changing back to human form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.human, true);
    assert.equal(werewolf.hungry, false);
    // your code here
  });

  it.only('should change back to human form after eating', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jorge');
    assert.equal(werewolf.human, false);
    werewolf.eat(victim);
    assert.equal(werewolf.human, true);
    // your code here
  });

  it.only('should not be able to consume victim in human form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jorge');
    assert.equal(werewolf.human, true);
    werewolf.eat(victim);
    assert.equal(victim.alive, true);
    // your code here
  });
});

describe('Victim', function() {

  it.only('should be a function', function() {
    assert.isFunction(Victim);
  });

  it.only('should instantiate our good friend, Victim', function() {
    var victim = new Victim();
    assert.isObject(victim);
  });

  it.only('should have a name', function() {
    var victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it.only('should start alive', function() {
    var victim = new Victim('TayTay');
    assert.equal(victim.alive, true);
  });

  it.only('should be dead after being eaten', function() {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });
});
