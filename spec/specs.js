describe('prepareText', function() {
	it('takes a block of text, and downcases it', function() {
		prepareText('Have a happy 22 day!').should.equal("have a happy 22 day!");
	});
	it('takes a block of text, and removes punctuation, numbers, and special characters', function() {
		prepareText("have a happy 22 day!").should.equal("have a happy day");
	});
	it('takes a block of text, and removes spaces', function () {
		prepareText('have a happy day').should.equal("haveahappyday");
	})
	
describe('getLength', function () {
	it('returns the length of a string', function() {
		singleCharacterArray('haveahappyday').should.equal(13);
	});
});

describe('findRows', function () {
	it('finds the rows needed for a given string', function () {
		findRows('haveahappyday').should.equal(4);
	});
});

describe('findColumns', function() {
	it('fins the columns need for a given string', function () {
		findColumns('haveahappyday').should.equal(5);
	});
});