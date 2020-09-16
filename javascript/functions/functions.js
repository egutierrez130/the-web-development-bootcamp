
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


// Intro to JS Scope
// Scope is the context that code is executed in

function doMath(){
    var x = 40;
    console.log(x);
}

doMath() //40
// x will not be defined since it is not declared in the global scope.

//when we define something outisde of a function, we stil have access to it inside of that function. example right below.
var y = 99;

function doMoreMath() {
    console.logy(y);
}

//doMoreMath(); prints 99


// Higher Order Functions 
// definition: a function where one can pass another function to it as an argument. And we could return another function.
// utilizing setInterval(anotherFunc, interval)
function sing(){
    console.log("Twinkle twinkle...");
    console.log("how i wonder...");
}

// setInterval(sing, 1000);

// we may also utilize a new function or annonymous function within the setInterval();
setInterval(function(){
    console.log("I am an anonymous function!");
    console.log("This is awesome!");
}, 2000);