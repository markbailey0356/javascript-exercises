const palindromes = function(str) {
  str = str.toLowerCase()
           .split("")
           .filter(x => x >= "a" && x <= "z")
           .join("");
  let strReverse = str.split("")
                      .reverse()
                      .join("");
  return str == strReverse;
}

module.exports = palindromes
