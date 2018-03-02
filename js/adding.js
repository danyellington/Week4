export class Adding {
constructor(number){
  this.number = number;
}


//Adding
// number() {
//   let answer = 0;
//   for (var i = 1; i <= this.number; i++) {
//       answer = answer + i;
//   }
//   return answer;
// }

math(){
   return (this.number*(this.number+1))/2;
}
}
