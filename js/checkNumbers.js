export class CheckNumbers {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  checkNums() {
  if (this.num1 === this.num2) {
    return -1;
  } else if (this.num2 > this.num1) {
    return true;
  } else {
    return false;
  }
}
}
