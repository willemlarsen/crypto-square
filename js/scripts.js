
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


