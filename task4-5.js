'use strict';

//Task 4

const fibonacci = (number) => number <= 1 ? number : fibonacci(number - 1) + fibonacci(number - 2);

console.log(fibonacci(4));

console.log(fibonacci(10));

console.log(fibonacci(5));

//Task 5

const fibonacciWithLoop = (number) => {
	let number1 = 1;
	let number2 = 1;

	for (let i = 2; i < number; i++) {
		let sum = number1 + number2;
		number1 = number2;
		number2 = sum;
	}
	return number2;
};

console.log(fibonacciWithLoop(4));

console.log(fibonacciWithLoop(10));

console.log(fibonacciWithLoop(5));
