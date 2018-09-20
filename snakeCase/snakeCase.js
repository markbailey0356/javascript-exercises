const snakeCase = function(str) {
  let wordMatches = str.match(/\w+/g);
  if (wordMatches.length > 1) {
    return wordMatches.join("_").toLowerCase();
  } else {
    return str.match(/[A-Z]?[a-z]+/g).join("_").toLowerCase();
  }
}

module.exports = snakeCase
