// refactor your Animal function constructor and methods to use the class keyword
//  ORIGINAL BELOW
// function Animal(name, type, weight, color) {
//   this.name = name;
//   this.type = type;
//   this.weight = 15;
//   this.color = 'black';
//   this.scream = function () {
//     return 'HELP!!';
//   };
// }
// Written as Class
class Animal {
  constructor(name, type, weight, color) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.color = color;
  }
  scream() {
    return 'HELP!!';
  }
}
// extend the Animal class with a type of animal
// add some unique methods and properties to the class extension
class Cat extends Animal {
  constructor(name, type, weight, color, domesticated, declawed) {
    super(name, type, weight, color);
    this.domesticated = domesticated;
    this.declawed = declawed;
  }
  scratch() {
    return "scratched..."
  }
}
// create an instance of the class extension and call one of its methods
const MyBlackCat= new Cat("Felix","Cat",100,"black",true,true)

console.log(MyBlackCat.scratch())


