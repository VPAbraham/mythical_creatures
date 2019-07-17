var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it.only('should be a function', function() {
    assert.isFunction(Unicorn);
  });

  it.only('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it.only('should have a name', function() {
    var unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });
  // assert.equal(actual, expected);

  it.only('should be able to have a different name', function() {
    var unicorn = new Unicorn('Pam');
    assert.equal(unicorn.name, 'Pam');
  });

  it.only('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it.only('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it.only('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
  });

  it.only('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
