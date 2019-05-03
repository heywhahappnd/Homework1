'use strict';

const OBJECT_1 = {
    name: 'Vlad'
};

const OBJECT_2 = {
	name : 'Anna'
};

const getName = function() {
	return this.name;
}


	
console.log(getName.call(OBJECT_1));


console.log(getName.call(OBJECT_2));

