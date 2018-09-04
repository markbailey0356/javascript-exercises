const ftoc = function(fahrenheit) {
  let celcius = (fahrenheit-32) * 5/9;
  return +celcius.toFixed(1);
}

const ctof = function(celcius) {
  let fahrenheit = celcius * 9/5 + 32;
  return +fahrenheit.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
