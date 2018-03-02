import {CheckNumbers} from './../js/checkNumbers.js';

describe('checks', function() {

  it ('should return num1 and num2', function() {
    let check = new CheckNumbers(2, 5);
    expect(check instanceof CheckNumbers);
  });

  // it('should return false', function() {
  //   let check = new CheckNumbers(3, 1);
  //   expect(check.checkNums())toEqual(no);
  // });
  //
  // it('should return -1', function() {
  //   let check = new CheckNumbers(3, 3);
  //   expect(check.checkNums())toEqual(number);
  // });
  //
  // it('should return true', function() {
  //   let check = new CheckNumbers(1, 3);
  //   expect(check.checkNums())toEqual(yes);
  // });

});
