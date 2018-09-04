const sumAll = function(a, b) {
  let result = 0;
  // ensure a & b are positive numbers
  if (typeof a != "number" || typeof b != "number" || a < 0 || b < 0) {
    return "ERROR";
  }
  // swap a and b to ensure b >= a
  if (b < a) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

module.exports = sumAll
