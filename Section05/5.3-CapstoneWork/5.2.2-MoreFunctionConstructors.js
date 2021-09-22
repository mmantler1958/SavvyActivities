// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.

function Animal(name,type,weight,color) {
  this.name = name;
  this.type = type;
  this.weight = 15;
  this.color = 'black';
  this.scream = function () {
    return "HELP!!"
  }
}

// create a new instance on an Animal
const Cat = new Animal();

// add methods to the Animal prototype
Animal.prototype.sayName = function () {
  console.log('my name is', this.name);
};

console.log(Cat.sayName());
console.log(Cat.scream());

// attach a method directly to the Animal instance that "overwrites" a prototype method
Animal.prototype.scream = function () {
  return 'meow';
};
console.log(Cat.scream());