import {LetterChange} from './../js/letterChange.js';

describe('convert', function() {

  it('should return a string', function() {
    let word = new LetterChange ("hello there");
    expect(word instanceof LetterChange);
  });

  it('should return string with first letter uppercase', function() {
    let word = new LetterChange("hello there");
    expect(word.letterChange()).toEqual("Hello There");
  });

})
