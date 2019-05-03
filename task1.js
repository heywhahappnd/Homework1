'use strict';

let currentTime = +prompt("Введите время в часах");

let discountStart = +prompt("Ввести начало скидки");
let discountEnding = +prompt("Ввести конец скидки");

if (discountEnding > discountStart) { 
	if (currentTime >= discountStart && currentTime <= discountEnding) {
		console.log("You have a discount")
	} else {
		console.log("You don't have a discount")
	}
} else {
	if (currentTime >= discountStart || currentTime <= discountEnding) {
		console.log("You have a discount")
	} else {
		console.log("You don't have a discount")
	}
}