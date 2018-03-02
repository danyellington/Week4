import {Adding} from './../js/adding.js';

describe('adds', function() {

  it('should return number', function() {
    let num = new Adding ("2");
    expect(num instanceof Adding);
  });

  it('should return numbers added together in sequential order', function() {
      let num = new Adding(5);
      expect(num.math()).toEqual(15);
    });
})
