'use strict';

function calculateSumOfElements(arr) {
	return arr.reduce((accum, element) => accum + element, 0);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 2, 2, 2, 2];
const arr3 = [1, 1, 1, 1, 1];

console.log(calculateSumOfElements(arr1));
console.log(calculateSumOfElements(arr2));
console.log(calculateSumOfElements(arr3));