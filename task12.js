'use strict';

function getMaxElement(arr) {
	return Math.max(...arr);
}

const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [15, 2, 1, 3, 10];
const arr_3 = [2, 3, 50, 1, 29];

console.log(getMaxElement(arr_1));
console.log(getMaxElement(arr_2));
console.log(getMaxElement(arr_3));