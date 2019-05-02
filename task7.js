'use strict';

function multiA(a) {
	return function(b) {
		return a * b;
	}
}

const multi3 = multiA(3);
const multi4 = multiA(4);

console.log(multi3(2));
console.log(multi4(5));