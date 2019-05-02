function getDouble(number) {
	this.number = number;
	return this.number * 2;
}

function getDoubledTrippled(number) {
	this.number = number;
	return this.number * 3;
}

console.log(getDoubledTrippled.call(this, getDouble(5)));
console.log(getDoubledTrippled.call(this, getDouble(2)));
console.log(getDoubledTrippled.call(this, getDouble(3)));