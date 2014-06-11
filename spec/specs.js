describe('cryptoSquare', function() {
	it('takes a block of text, and downcases it', function() {
		stripSpacesPunct('Have a happy day!').should.equal("have a happy day");
	});
});

