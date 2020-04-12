/************************************************************************/
/**
 *
 * JavaScript objects can be created via the object literal {} or via the syntax new
Object();. Additional properties can be added or accessed in one of two ways: object.
propertyName or object['propertyName'].
 */


// let obj1 = {};

// let array = [1,2,3,4,5];

// obj1.array = array;
// console.log('JS object',obj1);




/************************************************************************/
/**
 * Prototypal Inheritance
 *
 */

// function testClass(name)
// {
//   this.name = name;
//   this.sayName = function() {
//     console.log('name is',this.name);
//   }
// }

// let ex1 = new testClass('JS');
// ex1.sayName();

// ! This class dynamically adds the sayName function in the constructor. This pattern is known as prototypal inheritance





/************************************************************************/
/**
 *
// ?   Prototypal inheritance is the only method of inheritance in JavaScript. To add functions of a class, simply use the .prototype property and specify the name of function.

// ? When you use the .prototype property, you are essentially dynamically extending the JavaScript Object property of the object
 *
 */



// function testClass(name, age) {
//   this.name = name;
//   this.age = age;
// }

// testClass.prototype.printInfo = function () {
//   console.log(`${this.name}  ${this.age}`)
// }

// let ex1 = new testClass('Shubham', 25);
// console.log(ex1.age)
// ex1.printInfo();




/************************************************************************/
/**
 * ?  To mimic a private variable, instead of using this.propertyName, you can declare a local variable and have getter/setters that allow access to that variable.
 * ?This way, the variable is available only to the constructor’s scope. Notably, however, these mimicked private variables are now accessible only through the defined interfacing functions (getter getName and setter setName). These getters and setters cannot be added outside of the constructor.
 *
 *
 */

// function testClass(name, salary) {
//   this.name = name;
//   let privateSalary = salary;

//   this.getSalary = () => {
//     return privateSalary;
//   }

//   this.setSalary = (salary) => {
//     privateSalary = salary;
//   }
// }

// let ex1 = new testClass('Shubham', 900000);

// console.log('fetching salary directly', ex1.salary);
// console.log('fetching salary using getter', ex1.getSalary());
// //  updating salary using setter
// ex1.setSalary(1000000);
// console.log('fetching salary using getter', ex1.getSalary());



/************************************************************************/
/**
 * DEFINING CLASSES
Create two classes: Animal and Dog. The Animal class should take two parameters in the
constructor (name and animalType). Set them as its public properties.
In addition, the Animal class should have two functions: sayName and sayAnimalType.
sayName prints name, and sayAnimalType prints animalType initialized in the constructor.
 *
 */

function Animal(name, type) {
    this.name = name;
    this.type = type;
    this.printInfo = function () {
      console.log(`Name : ${name} type : ${type}`)
    }
  }
  
  function Dog(name) {
    Animal.call(this, name, 'Dog');
  }
  
  let myPet = new Dog('ditto');
  let myPet1 = new Dog('Tommie');
  myPet.printInfo();
  myPet1.printInfo();
  
  