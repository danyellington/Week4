export class CheckNumbers {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  checkNums() {
    //compare numbers using if and else statements
    //if num1 is equal to num2 it should return -1
  if (this.num1 === this.num2) {
    return -1;
    //if num2 is greater than num1 it should return true
  } else if (this.num2 > this.num1) {
    return true;
  } else {
    //if num1 is greater than num2 it should return false
    return false;
  }
}
}
