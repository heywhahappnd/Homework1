function getName(name) {
    this.name = name;
    return this.name;
}

const OBJECT_1 = {
    name: 'Vlad'
};

const OBJECT_2 = {
	name : 'Anna'
}
console.log(getName(OBJECT_1.name));
console.log(getName('Vlad'));

console.log(getName(OBJECT_2.name));
console.log(getName('Anna'));