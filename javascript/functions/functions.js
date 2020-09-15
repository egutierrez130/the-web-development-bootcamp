
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



// FUNCTIONS QUIZ!!!!!
function test(x,y) {
    return y - x;
}

test(10, 40); //30

function test(x) {
    return x*2;
    console.log(x);
    return x/2;
}

test(40); //80


// FUNCTIONS PROBLEM SET!!!!!
// function isEven(x) {
//     if(x % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//refactored code from above...shorter version right below
function isEven(x) {
    return x % 2 === 0;
}

// result *= i; same as result = result * i
function factorial(x) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= x; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

// factorial (4) 4 x 3 x 2 x 1

// str.replace(searchvalue, newvalue)
function kebabToSnake(str) {
    //replace all '-' with "_"'s
    //return str
    var newStr = str.replace(/-/g ,"_");
    //return str
    return newStr;
}