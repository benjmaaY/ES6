var Person{ name: ”Moez”, profession: “teacher”, age:25};

var (name, age) = Person;
console.log(name, age);

//

console.log(Person.name, Person.age);

//

const Person{ name: ”Moez”, profession: “teacher”, age:25};

//

var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahoe = [...peaks, ...canyons]

console.log(tahoe);
<==["Tallac", "Ralston", "Rose", "Ward", "Blackwood"] ==>