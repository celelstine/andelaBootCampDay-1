/**
 * A function to return an array of prime number from 0 to the input parameter
 * @Author okorocelstine@gmail.com (Okoro Celestine)
 */
'use strict'

var submit = {}
submit.getprimes = function(limit) {
	 var primeNumbers = [];
	 var dividable =false;
	if ( typeof limit == "number" ) {
		if (limit < 1) {
			return "expecting only numbers greater than 0";
		}else if (limit == 1 ) { 
		  return [];
		} else {
			for (var i = 2; i <= limit; i++) {
				for ( var j =0; j < primeNumbers.length; j++) {
					if ( i % primeNumbers[j] === 0 ) {
						j = primeNumbers.length;
						dividable= true;
					}
				}
				if (!dividable) {
					primeNumbers.push(i);
				}
				dividable = false;
			}
		return primeNumbers;
		}
	} else {
		return "expecting a number";
	}
}


module.exports = submit;