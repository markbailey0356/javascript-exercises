const caesar = function(str, shift) {
  return (str.split("")
             .map(char => caesarLetter(char, shift))
             .join(""))
}

const caesarLetter = function(char, shift) {
  if (char.length != 1) throw "Must pass a single character to caesarLetter()"
  
  let charCode = char.charCodeAt(0);
  if (charCode >= 97 && charCode <= 122) { // lower case letter
    var offset = 97;
  } else if (charCode >= 65 && charCode <= 90) { // upper case letter
    offset = 65;
  } else { // not a letter
    return char;
  }
  // apply shift cipher
  charCode = (charCode - offset + shift)._mod(26) + offset;
  return String.fromCharCode(charCode);
}

// modulus function that works as expected with negative numbers
// -1 % 26 should be 25, not -1
Number.prototype._mod = function(n) {
  return ((this % n) + n) % n;
}

module.exports = caesar
