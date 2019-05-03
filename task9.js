const OBJECT_3 = {
	number: 5
};

const getDoubled = function() {
	return this.number * 2;
};

const getDoubledTrippled = function() {
	return getDoubled.call(OBJECT_3) * 3;
};


console.log(getDoubled.call(OBJECT_3));

console.log(getDoubledTrippled());