'use strict';


function randomizeSorting() {
	return Math.random() - 0.5;
}

const firstArray = [1, 2, 3, 4, 5];

const secondArray = [90, 100, 5, 10, 0];

console.log(firstArray.sort(randomizeSorting));
console.log(firstArray.sort(randomizeSorting));

console.log(secondArray.sort(randomizeSorting));
console.log(secondArray.sort(randomizeSorting));