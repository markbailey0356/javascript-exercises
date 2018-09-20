function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (array) {
	return array.reduce((sum,x) => sum + x, 0);
}

function multiply (array) {
	return array.reduce((product,x) => product * x, 1);
}

const power = Math.pow;

function factorial(x) {
	return x == 0 ? 1 : x * factorial(x-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}