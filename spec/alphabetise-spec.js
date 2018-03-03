import {Alphabet} from './../js/alphabet.js';

describe('sorts', function() {

  it('should return original string', function() {
    let alpha = new Alphabet("goodbye");
    expect(alpha instanceof Alphabet);
  });

  it('should string with characters in alphabetical order', function() {
    let alpha = new Alphabet("cute kitty");
    expect(alpha.alphabetical()).toEqual(" ceiktttuy");
  });
})
