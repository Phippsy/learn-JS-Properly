function Person (name) {
	this.name = name;
}

var donal = new Person("Donal");
donal.height = "tiny";
donal.likes = ["tea", "food"];

Person.prototype.age = 36;
delete donal.age;
console.log(donal.age); // 36

var JSONdon = JSON.stringify(donal);
console.log(JSON.parse(JSONdon)); // { name: 'Donal', height: 'tiny', likes: [ 'tea', 'food' ] }
var donal2 = JSON.parse(JSONdon);
console.log(donal2.name);

// playing with object properties
console.log('// playing with object properties');

var obj = {};
Object.defineProperty(obj, "name", {
	writable: false,
	value: "Donal"
});

console.log("Name is " + obj.name);
obj.name = "Peebles";
console.log("Name is " + obj.name);

// Object.defineProperty(obj, "name", {
// 	writable: true,
// 	value: "Donal"
// });

var book = {
	_year: 2004,
	edition: 1
};

Object.defineProperty(book, "year", {
	get: function() {
		return this._year;
	},
	set: function(newValue) {
		if (newValue > 2004 ) {
			this._year = newValue;
			this.edition += newValue - 2004;
		}
	}
});

book.year = 2005;
console.log(book.edition);
console.log(book.year);

/*
The code above is illustrating the getter and setter attributes when setting properties. The set method above updates the _year property of the book object if year is > 2004, the value of _year is updated and the version number is changed
*/

var book = {};
Object.defineProperties(book, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	},
	year: {
		get: function() {
			return this._year;
		},
		set: function(newValue){
			if (newValue > 2004 ) {
				this._year = newValue;
				this.edition += newValue - 2004;
			}
		}
	}
});

/*The code above does the same as the code in lines 36-52, but uses the defineProperties method and passes each property name to be set as an object.*/

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor);
console.log(descriptor.enumerable); // false
console.log(typeof descriptor.get); // function

/*
The factory pattern for object creation
*/
console.log("------The Factory Pattern-------")

function createPerson(name,age,job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		console.log(this.name);
	};
	return o;
}

var person1 = createPerson("Donal", 35, "Digital Monkey");
console.log(person1.name);

/*
The constructor pattern
*/
console.log("------The Constructor Pattern-------")

function Person(name,age,job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		console.log(this.name);
	};
}

var person2 = new Person("Ann", 35, "Amazing lady");
console.log(person2.job);
console.log(person2.constructor == Person);


function Penguin(name) {
	this.name = name;
	this.feet = 2;
	this.swim = function() {
		console.log("splish splash splosh");
	}
}

var pingu = new Penguin("Pingu");
pingu.swim();
console.log(pingu.constructor == Penguin);
console.log(pingu.constructor);