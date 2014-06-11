describe('cryptoSquare', function() {
	it('takes a block of text, strips out all the spaces, and concatenates it', function() {
		stripSplitConcat('have a happy day').should.equal('haveahappyday');
	});
});

