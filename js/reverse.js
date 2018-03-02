export class Reverse {

rewind() {
//first, create an empty string to place the reversed letters
  let answer = "";
  //using a for loop, 'i' indicates the characters of a string. length - 1 starts at the end of the string until 0 is reached. i-- indicates moving right to left
  for (var i = string.length - 1; i >= 0; i--) {
  //each instance of i in string is placed in empty string from left to right, returning string in reverse
  answer = answer + string.charAt(i);
}

return answer;
}


}
