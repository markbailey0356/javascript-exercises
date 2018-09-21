function translate(str) {
	const translateWord = str => str.replace(/^([^aeiouq]*(?:qu)?)(.*)/, "$2$1ay");
	return str.split(" ").map(translateWord).join(" ")
}

module.exports = {
	translate
}

