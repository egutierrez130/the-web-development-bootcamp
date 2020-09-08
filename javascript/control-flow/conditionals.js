// Working with Conditionals(if, else if, else)

// Examples
// if(age < 18){
//     console.log("Sorry, you are not old enough to enter the venue");
// }
// else if(age < 21){
//     console.log("You can enter, but cannot drink");
// }
// else {
//     console.log("Come on in. You can drink.");
// }

// Exercises
age = Number(age);//turns string to number value.

var age = Number(prompt("What is your age?"));

//If age is negative
if(age < 0){
    console.log("Come back once you're out of the womb.");
}

//If age is 21
if(age === 21){
    console.log("Happy 21st birthday!");
}

//If age is odd
if (age % 2 !== 0){
    console.log("Your age is odd");
}

//If age is a perfect square
if(age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square.");
}
