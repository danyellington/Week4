import {Adding} from './../js/scripts.js';

describe('adds', function() {

  it('should return number', function() {
    let num = new Adding ("2");
    expect(num instanceof Adding);
  });

  it('should return the user age in seconds', function() {
      let num = new Adding("2");
      expect(number()).toEqual(3);
    });
})
