'use strict';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(generateRandomNumber(10, 50));
console.log(generateRandomNumber(13, 75));

console.log(generateRandomNumber(1190, 1193));
console.log(generateRandomNumber(870, 90));

console.log(generateRandomNumber(1, 5));
console.log(generateRandomNumber(-3, -10));