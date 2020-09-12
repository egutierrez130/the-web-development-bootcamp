
// Arguments
function sayHello(name){
    console.log("Hello there " + name + "!");
}

// Argument Examples
// Functions can have as many arguments as needed.
console.log("PRINTING THE AREA OF A TRIANGLE");
function area(length, width){
    console.log(length * width);
}

area(9,2); //18

console.log("GREETING A FEW OF MY FRIENDS FROM HOGWARTS");

function greet(person1, person2, person3){
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}

greet("Harry", "Ron", "Hermione");