describe('cryptoSquare', function() {
	it('takes a block of text, and downcases it', function() {
		convertTextToLowerCase('Have a happy day!').should.equal("have a happy day!");
	});
	it('takes a block of text, and removes punctuation', function() {
		removePunctuation("have a happy day!").should.equal("have a happy day");
	});
	it('takes a block of downcased text, removes spaces, and concatentates it', function () {
		removeSpacesAndConcatenate('have a happy day').should.equal("haveahappyday");
	})
	it('takes a block of text and turns into an array of single characters', function() {
		singleCharacterArray('haveahappyday').should.eql(['h', 'a', 'v', 'e', 'a', 'h', 'a', 'p', 'p', 'y','d', 'a', 'y'])
	});
	it('measures the length of an array of single characters, and generates the length of the sides of the closest square', function () {
		newArraySides(['h', 'a', 'v', 'e', 'a', 'h', 'a', 'p', 'p', 'y','d', 'a', 'y']).should.eql(4)
	})
});

