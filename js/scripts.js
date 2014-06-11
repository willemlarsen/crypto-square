var factorial = function(number) {
    if(number === 0) {
        return 1
    } else {
        return number * factorial(number - 1);
    }
}

$(document).ready(function() {
		
	$('form#factorial').submit(function(event) {

	    var inputNumber = parseInt($('input#the-number').val());

	    var theResult = factorial(inputNumber);
        
	   
	    $("#print-the-result").text(theResult);
	    $("#print-the-number").text(inputNumber);
	    $('.result').show();

		event.preventDefault();

	});
});

