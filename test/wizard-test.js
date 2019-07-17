var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it.only('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it.only('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it.only('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it.only('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it.only('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it.only('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it.only('should start rested', function() {
    // create wizard
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    // assert isRested returns true
    assert.equal(wizard.isRested, true);
  });

  it.only('should be able to cast spells', function() {
    // create wizard
    var wizard = new Wizard ({name: 'Jhun', bearded: false})
    // assert wizard.cast() returns 'MAGIC BULLET'
    assert.equal(wizard.cast(), 'MAGIC BULLET');
  });

  it.only('should only be able to cast 3 spells', function() {
    // create wizard
    var wizard = new Wizard ({name: 'Jhun', bearded: false});
    // assert isRested is true
    assert.equal(wizard.isRested, true);
    // cast()
    wizard.cast();
    // assert isRested is true
    assert.equal(wizard.isRested, true);
    // cast()
    wizard.cast();
    // assert isRested is true
    assert.equal(wizard.isRested, true);
    // cast()
    wizard.cast();
    // assert isRested is false
    assert.equal(wizard.isRested, false);
    // assert cast() returns 'I SHALL NOT CAST!'
    assert.equal(wizard.cast(), 'I SHALL NOT CAST!');
  });
});
