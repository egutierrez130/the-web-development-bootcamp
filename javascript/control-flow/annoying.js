var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah") {
    var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!");

// Version 2
// var answer = prompt("Are we there yet?");

// while(answer.indexOf("yes") === -1) {
//     var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!");