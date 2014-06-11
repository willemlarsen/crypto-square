
var convertTextToLowerCase = function (text) {
	return text.toLowerCase();
};

var removePunctuation = function (text) {
	text = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	text = text.replace(/\s{2, 100}/g, " ");
	return text;
}

var removeSpacesAndConcatenate = function (text) {
	text = text.replace(/ /g, "");
	return text;
}

var singleCharacterArray = function (text) {
	text = text.split("");
	return text;
}

var newArraySides = function (oldArray) {
		return Math.ceil(Math.sqrt(oldArray.length));		
}

var rowOne = function (array) {
    var newArraySides = function (array) {
		return Math.ceil(Math.sqrt(array.length));		
}
   	var newArray = array.slice(0, 4);
    return newArray;
}


