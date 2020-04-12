/************************************************************************/
//* Object 
// ! An Object is a unique entity which contains property and methods. For example “car” is a real life Object, which have some characteristics like color, type, model, horsepower and performs certain action like drive. 
// ! The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string.
// ? Note: A Method in javascript is a property of an object whose value is a function.





/************************************************************************/
/**
 ** Classes
 // ? Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation
 // * JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
// !  –Mozilla Developer Network
 *
 */


// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   printInfo() {
//     return `details are :: name-${this.name} type - ${this.type}`
//   }
// }

// let Dog1 = new Animal('ditto', 'Dog')
// let Dog2 = new Animal('tommie', 'Dog')
// console.log(Dog1.printInfo());
// console.log(Dog2.printInfo());



/************************************************************************/
/**
 // * Encapsulation

 // ! The process of wrapping property and function within a single unit is known as encapsulation.
 *

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setAddress(addr) {
    this.address = addr;
  }

  getAddress() {
    return this.address;
  }

  printAll() {
    return `Name is ${this.name} Address is ${this.address}`
  }
}

let Shubham = new Person('Shubham', 25);
console.log(Shubham.printAll());

Shubham.setAddress('Shalimar Garden, Sahibabad');
console.log(Shubham.printAll());
 */


/************************************************************************/
/**
 * 
 // ! Abstraction- means representing essential features hiding the background detail.

 *
 */
// show it using function constructor

/************************************************************************/
/**
//! Inheritance
It is a concept in which some property and methods of an Object is being used by another Object.
 *
 */


class Person {
    constructor(name) {
      this.name = name
    }
  
    toString() {
      return `Name of person is ${this.name}`
    }
  }
  
  class Student extends Person {
    constructor(name, School) {
      super(name);
      this.School = School;
    }
  
    toString() {
      return `${super.toString()} and School name is ${this.School}`
    }
  }
  
  
  let student1 = new Student('Shubham', 'SMCS');
  console.log(student1.toString());
  