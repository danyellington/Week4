import {CheckNumbers} from './../js/CheckNumbers.js';

describe('checks', function() {

  it ('should return num1 and num2', function() {
    let check = new CheckNumbers(2, 5);
    expect(check instanceof CheckNumbers);
  });

  it('should return false', function() {
    let check = new CheckNumbers(3, 1);
    expect(check.checkNums())toEqual(false);
  });

  it('should return -1', function() {
    let check = new CheckNumbers(3, 3);
    expect(check.checkNums())toEqual(-1);
  });

  it('should return true', function() {
    let check = new CheckNumbers(1, 3);
    expect(check.checkNums())toEqual(true);
  });

})
