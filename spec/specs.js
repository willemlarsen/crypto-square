describe('prepareText', function() {
	it('takes a block of text, and downcases it', function() {
		prepareText('AbHaHgNo').should.equal("abhahgno");
	});
	it('takes a block of text, and removes punctuation, numbers, and special characters', function() {
		prepareText("l!m.4ag:").should.equal("lmag");
	});
	it('takes a block of text, and removes spaces', function () {
		prepareText('have a happy day').should.equal("haveahappyday");
	});
});

describe('findColumns', function() {
	it('finds the columns need for a given string', function () {
		findColumns('haveahappyday').should.equal(4);
	});
});

describe('blocks', function () {
	it('enters a space every 5 letters in a string', function () {
		blocks('abcdeabcdeabcde').should.equal('abcde abcde abcde');
	});
});

describe('encrypt', function() {
	it('encrypts a block of text', function() {
		encrypt('haveahappyday').should.equal('hapya hyvad epa');
	});
});