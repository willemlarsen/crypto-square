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
	
describe('getLength', function () {
	it('returns the length of a string', function() {
		getLength('haveahappyday').should.equal(13);
	});
});

describe('findRows', function () {
	it('finds the rows needed for a given string', function () {
		findRows('haveahappyday').should.equal(3);
	});
});

describe('findColumns', function() {
	it('fins the columns need for a given string', function () {
		findColumns('haveahappyday').should.equal(4);
	});
});

describe('encrypt', function() {
	it('encrypts a block of text', function() {
		encrypt('haveahappyday').should.equal('hap ahy vad epa y');
	});
});