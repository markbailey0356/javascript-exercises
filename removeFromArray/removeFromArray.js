const removeFromArray = function(array, ...values) {
  for (let valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
    let foundIndex = array.indexOf(values[valuesIndex])
    if (~foundIndex)
      array.splice(foundIndex,1);
  }
  return array;
}

module.exports = removeFromArray
