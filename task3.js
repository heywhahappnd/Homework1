'use strict';

function reverseString(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}

console.log(reverseString("Hello World"));
console.log(reverseString("It's good to know you"));
console.log(reverseString("This is sick"));
console.log(reverseString("HTML is not a programming language"));