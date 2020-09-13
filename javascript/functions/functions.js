
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

// The Return Keyword
// Often we want a function to send back an output value
function square(x) {
    return x * x; 
}

var result = square(10);

// We use the return keyword to output a value from a function.

//this function capitalizes the first char in a string:
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city); 
// we can capture the returned value in a variable.
// the return keyword stops execution of a function.

//function declaration vs function expression
//function declaration
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//function expression
var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}