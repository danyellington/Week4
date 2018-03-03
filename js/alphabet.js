export class Alphabet {
constructor(alpha){
  this.alpha = alpha;
}


alphabetical(){
  // convert the string into an array of characters
let letters = this.alpha.split("");

// sort the array in alphabetical order
let alphabetise = letters.sort();

// return the newly sorted string
return alphabetise.join("");

}
}
