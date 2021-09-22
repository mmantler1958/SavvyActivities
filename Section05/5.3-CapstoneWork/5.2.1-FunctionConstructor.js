// create an object literal
const puppy = {
  name: 'Max',
  age: 5,
  hobbies: ['run', 'fetch', 'sit'],
};

// include a method that uses "this"

const person = {
  name: 'Jim',
  hobbies: ['teach', 'fish', 'chess'],
  greet() {
    return `Wedding bells for ${this.name}`;
  },
};
function logThis() {
  console.log(person.greet());
}
logThis();

// create a function in the global scope that prints "this"

function globalScope() {
  
}
