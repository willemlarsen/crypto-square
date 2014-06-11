var stripSplitConcat = function(text) {
	var stageOne = text.split(" ")
	for (var index = 0; index < stageOne.length; index++) {
		stageOne[index] = stageOne[index] + stageOne[index + 1];
	}
};




