//====================================

    //Part 1: Variables
var givenName;
// Q: What does `givenName` equal right now?
// A: Nothing.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: Tim.
console.log(givenName);

givenName = "JD";
// Q: What is `givenName` set to right now?
// A: JD.
console.log(givenName);

var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: Hello, how are you?
console.log(greeting);

/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40


math = high - "5";
// Q: What is `math` set to?
// A: 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;
// its 2016 though... Wouldn't he be 33?

// Answers Below:
var timsAge = "Tim is " + (today - born) + " years old"
console.log(timsAge);



// Store some information following in variables.
var yourName = "Lauren";
var instructorName = "Jason Vanderslice";

// Update the variables above so the expression reads correctly.
// Answers Below:
console.log(yourName);

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);
