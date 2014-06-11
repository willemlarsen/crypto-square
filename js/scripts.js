
var convertTextToLowerCase = function (text) {
	return text.toLowerCase();
};

var removePunctuation = function (text) {
	text = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	text = text.replace(/\s{2, 100}/g, " ");
	return text
}

var removeSpacesAndConcatenate = function (text) {
	text = text.replace(/ /g, "");
	return text
}

var singleCharacterArray = function (text) {
	text = text.split("");
	return text
}

var newArraySides = function (oldArray) {
		return Math.ceil(Math.sqrt(oldArray.length));		
}

var rowOne = function (oldArray) {
   	return ['h', 'a', 'v', 'e'];
}

