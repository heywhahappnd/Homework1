const OBJECT_1 = {
	number: 5
};

const getDoubled = function() {
	return this.number * 2;
}

const getDoubledTrippled = function() {
	return getDoubled.call(OBJECT_1) * 3;
}


console.log(getDoubled.call(OBJECT_1));

console.log(getDoubledTrippled());