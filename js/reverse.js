export class Reverse {
constructor(string){
this.string = string;
}
rewind() {
  let answer = "";
  for (var i = this.string.length - 1; i >= 0; i--) {
  answer = answer + this.string.charAt(i);
}

return answer;
}


}
