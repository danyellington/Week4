import {Reverse} from './../js/reverse.js';

describe('reverse', function() {
  it('should return str', function() {
  let str = new Reverse("hello");
  expect(str instanceof Reverse);
});

it('should return str in reverse', function() {
  let str = new Reverse("hello");
  expect(str.rewind())toEqual("olleh");
});
})
