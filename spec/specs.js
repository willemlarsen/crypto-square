describe('cryptoSquare', function() {
	it('takes a block of text, and downcases it', function() {
		prepareCryptoTextA('Have a happy day!').should.equal("have a happy day!");
	});
});

