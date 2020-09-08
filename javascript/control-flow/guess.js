//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT");
}

// otherwise, check if higher
else if(guess > secretNumber){
    alert("Too high. Guess again!");
}

//otherwise, check if lower
else {
    alert("Too low. Guess again!");
}