'use strict';

function getMaxElement(arr) {
	return Math.max(...arr);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [15, 2, 1, 3, 10];
const arr3 = [2, 3, 50, 1, 29];

console.log(getMaxElement(arr1));
console.log(getMaxElement(arr2));
console.log(getMaxElement(arr3));