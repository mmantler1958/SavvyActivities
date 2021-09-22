// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let i = 1         //Number 
let str = "hello"   //String
let bool = true     //Boolean
let aVariable           //Undefiend
let nl=null         //Null
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof str,typeof i, typeof bool, typeof aVariable, typeof nl)

// create a variable that references a template literal
let tlit = `this is a string ${str}`
console.log(tlit)

// inside the template literal, use two variables
let tlit2 = `template literal with two variables: ${str} and ${i}`
console.log(tlit2);
// reassign the value of the variable that references "null"
nl="not null now"
// print the value and its type
console.log(nl, typeof nl)

// print a variable that causes a ReferenceError
//console.log(random)

// alter the previous line to no longer cause a ReferenceError
console.log( "random" );