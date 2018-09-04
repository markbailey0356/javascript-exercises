const ftoc = function(fahrenheit) {
  let celcius = (fahrenheit-32) * 5/9;
  return Math.round(celcius * 10) / 10;
}

const ctof = function(celcius) {
  let fahrenheit = celcius * 9/5 + 32;
  return Math.round(fahrenheit * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
