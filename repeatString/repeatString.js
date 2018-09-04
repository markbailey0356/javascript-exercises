const repeatString = function(stringToRepeat, numOfRepetitions) {
  if (numOfRepetitions < 0) return "ERROR";
  let returnValue = "";
  for (let i = 0; i < numOfRepetitions; i++) {
    returnValue += stringToRepeat;
  }
  return returnValue;
}

module.exports = repeatString
