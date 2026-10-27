let alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  let startSearch = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[startSearch + i]) {
      return alphabet[startSearch + i];
    }
  }
}

/*tests*/

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
