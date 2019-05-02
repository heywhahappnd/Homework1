'use strict';

function isPalindrome(str) {
	const formattedString = str.replace(/[\s,:]/g, "").toLowerCase();
  	return formattedString === formattedString.split("").reverse().join("");
}
console.log(isPalindrome("Hello World"));
console.log(isPalindrome("Anna"));
console.log(isPalindrome("Ono"));
console.log(isPalindrome("А роза упала на лапу Азора"));