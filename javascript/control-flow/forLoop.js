// For Loops
// for(init; condition; step) {
//     //run some code
// }

// Printing numbers from 1-5 with a for loop
for(var count = 1; count < 6; count++) {
    console.log(count);
}

// Printing each character in a string with a for loop
var str = "hello";

for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
} 

// For Loops Exercise
for(var i = 0; i < 16; i+=8) {
    console.log(i);
}
//prints 0 and 8

var str = "ahceclwlxo";

for(var i = 1; i < str.length; i+=2){
    console.log(str[i]);
}

console.log("PRINTING ALL NUMBERS BETYWEEN -10 AND 19");

for(var i = -10; i < 20; i++) {
    console.log(i);
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");

// for(var i = 10; i <= 40; i += 2) {
//     console.log(i);
// }

// or

for(var i = 10; i <= 40; i += 1){
    if(i % 2 === 0) {
        console.log(i);
    }
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");

for(var i = 300; i <= 333; i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}

console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}
