// create a variable "timeOfDay" and assign it a string
let timeOfDay = "Morning";
// create a variable "greeting" that references a template literal

// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}`;

// print "greeting"
console.log(greeting);
// create a new variable, but do not assign it a value

let newVar;
// print the variable and its type
console.log(`newVar= ${newVar} is of data type ${typeof newVar},`)
// ? what type should we expect?
newVar = null;
// assign the variable a value that indicates the variable is purposely blank
// ? what value should we assign?
// null
// print the variable and its type again
// ? what type should we expect?
// Object
console.log(`newVar= ${newVar} is of data type ${typeof newVar},`)
// try to print a variable that does not exist
// ? what should we expect to print in the CLI?
// Prints errors
//console.log(var1);
// print "greeting" again
// ? will this line run?
console.log(greeting);
// it runs after commenting out the error code line 27
