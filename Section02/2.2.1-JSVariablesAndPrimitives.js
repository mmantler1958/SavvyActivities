// create a constant variable (const)
const myName = "Martin";
// create a variable that can be reassigned (let)
let myAge = 31;
// create three variables and assign them values of different data types (=)
let a = 1, b = "B", c = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof a, "a", typeof b, "b");
// TIP: console.log() prints a value in the console/terminal

// change the value referenced by a variable (dynamic typing)
b = 22;
// print the type of the variable you just changed (typeof)
console.log(typeof b, "b");
// create variables and give them values to complete the sentences that will print
// ? which variables need to be created?
// ? what type of data needs to go in each variable?
let question1="Which variables need to be created?"
let question2="What type of data needs to go in each variable?"
console.log(`${question1} a, b, c`)
console.log(`${question2}  a needs a data type of  ${typeof a},  b needs a variable type of  ${typeof b}, and c needs a data type of ${typeof c}`)
