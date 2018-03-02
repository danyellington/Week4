import {letterChange} from './../js/letterChange.js';

describe('convert', function() {

  it('should return a string', function() {
    let word = new LetterChange ("hello there");
    expect(word instanceof LetterChange);
  });

})
