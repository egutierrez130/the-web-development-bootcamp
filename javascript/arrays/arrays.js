// Javascript Basics: Arrays
// Unit Objectives:
// 1: Define and add data to arrays
// 2: Utilize built-in array methods
// 3: Exercise:Console Todo List
// We're going to use arrays to do things like keep track of that to do's that you have in your To Do list.

// Perfect use case of an array.
// Let's us group data in a list.
// Array are indexed starting at 0. 
var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends[0]) //"Charlie"
friends[1] + <3 + friends[2] //"Liz <3 David"

// We can also udpdate arrays
var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";
// We can also add new data to an existing array by:
friends[4] = "Amelie";

// We can initialize an empty array two ways:
var frineds = []; 
var friends = new Array()

// Arrays can hold any type of data
var random_collection =[49, true, "Hermione", null];

// Arrays have a length property
var nums = [45, 37, 89, 24];
nums.lenth //4 