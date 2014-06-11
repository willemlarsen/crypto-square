
var prepareCryptoTextA = function (text) {
	return text.toLowerCase();
};

var prepareCryptoTextB = function (text) {
	text = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	text = text.replace(/\s{2, 100}/g, " ");
	return text
}


