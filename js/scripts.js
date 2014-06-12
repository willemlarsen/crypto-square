
var prepareText = function(text) {
	var downcasedText = text.toLowerCase();
	var searchAndRemove = /[,.!?;'":><%$&*@#1234567890 ]/g;
	return downcasedText.replace(/[,.!?;'":><%$&*@#1234567890 ]/g,"");
};



var getLength = function (string) {
		return string.length;		
};

var findRows = function(string) {
	return Math.floor(Math.sqrt(string.length));
};

var findColumns = function(string) {
	return Math.ceil(Math.sqrt(string.length));
};

