export class Adding {
constructor(number){
  this.number = number;
}


//Adding
number() {
//this method uses a for loop to add each number sequentially
//answer variable is set to 0
  let answer = 0;
  //index starts at one until it reaches inputted number, each instance of i is added to the next 
  for (var i = 1; i <= this.number; i++) {
      answer = answer + i;
  }
  return answer;
}

math(){
  //this just takes the number plus 1 and multiplies it my the same inputted number then divides by 2
   return (this.number*(this.number+1))/2;
}
}
