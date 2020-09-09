//While Loops
//string we're looping over
// var str = "hello";
// //first character is at index 0
// var count = 0;

// while(count < str.length) {
//     console.log(str[count]);
//     count++;
// }

//While Loops Exercise 1
// var num = 1;

// while(num <= 10) {
//     console.log(num);
//     num += 2;
// }

//starts at 1 and increments by 2
//1
//3
//5
//7
//9

//While Loops Exercise 2
// var num = 1

// while(num <= 20) {
//     if(num % 4 === 0){
//         console.log(num);
//     }
//     num++;
// }

// prints 
//4
//8
//12
//16
//20

//While Loops Exercise 3
// var num = 100;

// while(num < 150) {
//     console.log(num + 1);
//     num--;
// }

//infinte loop because num will always be less than 150. *do NOT run this portion of code. 

// While Loops Problem Set
//Problem 1: Print all numbers between -10 and 19
var num = -10;

while(num <= 19) {
    console.log(num);
    num++;
}

//Problem 2: Print all even numbers between 10 and 40
var number = 10;

while(number <= 40) {
    console.log(number);
    number+= 2;
}

//Problem 3: Print all odd numbers between 300 and 333

var numero = 301;

while(numero <= 333) {
    if(numero % 2 !== 0) {
        console.log(numero);
    }
    numero+=1;
}

//Problem 4. Print all numbers divisible by 5 AND 3 between 5 and 50
var numb = 5;

while(numb <= 50) {
    if(numb % 5 === 0 && numb % 3 === 0) {
        console.log(numb);
    }
    numb++;
}