export class letterChange {

}


letterChange() {
  var letters = string.split(" ");

  for (var i = 0; i < letters.length; i++) {
    letterss[i] = letters[i].substring(0,1).toUpperCase() + letters[i].substring(1);
  }

  return letters.join(" ");

}
