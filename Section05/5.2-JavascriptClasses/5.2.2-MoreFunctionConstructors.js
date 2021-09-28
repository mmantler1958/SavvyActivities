// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.

function Animal(name, type, weight, color) {
  this.name = name;
  this.type = type;
  this.weight = 15;
  this.color = 'black';
  this.scream = function () {
    return 'HELP!!';
  };
}

// create a new instance on an Animal
const Cat = new Animal('Garfield');

// add methods to the Animal prototype
Animal.prototype.sayName = function () {
  return `my name is ${this.name} `;
};
console.log(Cat.sayName());

// attach a method directly to the Animal instance that "overwrites" a prototype method
Animal.prototype.sayName = function () {
  return `my name is really puddy cat`;
};
console.log(Cat.scream());
Cat.scream = function () {
  return ` ouch`;
};
console.log(Cat.sayName());
console.log(Cat.scream());
Cat.scream = function () {
  return "to tired to scream";
};
console.log(Cat.scream());
