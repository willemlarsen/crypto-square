describe('cryptoSquare', function() {
	it('takes a block of text, and downcases it', function() {
		convertTextToLowerCase('Have a happy day!').should.equal("have a happy day!");
	});
	it('takes a block of downcased text, and removes punctuation', function() {
		removePunctuation("have a happy day!").should.equal("have a happy day");
	});
	it('takes a block of downcased text de-punctuated text, removes spaces, and concatentates it', function () {
		removeSpacesAndConcatenate('have a happy day').should.equal("haveahappyday");
	})
});

