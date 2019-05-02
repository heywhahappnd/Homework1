'use strict';



function calculateAmountOfCalls() {
  let count = 0;
  
  return function(){
  	return count++;
  }
}

const function1 = calculateAmountOfCalls();

console.log(function1());
console.log(function1());
console.log(function1());
console.log(function1());