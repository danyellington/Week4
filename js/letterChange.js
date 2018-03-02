export class letterChange {

}


letterChange() {
  var letters = string.split(" ");

// start by splitting the word into two parts and then combining them
// capitalize th first part and combine with the rest of the string
for (var i = 0; i < letters.length; i++) {
  letters[i] = letters[i].substring(0,1).toUpperCase() + letters[i].substring(1);
}

// return the array of letters joined into a string
return letters.join(" ");

}

}
