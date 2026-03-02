'use strict';
//OBJECT ORIENTED PROGRAMMING
/*
//Constructor Functions
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const author = new Person('CodeVortex', 1999);
console.log(author);

const juliet = new Person('Juliet', 2000);
const romeo = new Person('Romeo', 2000);

// console.log(romeo, juliet);
Person.prototype.calcCurAge = function () {
  return `${this.name} is ${new Date().getFullYear() - this.birthYear} years old as of ${new Date().getFullYear()}`;
};

// console.log(juliet.calcCurAge(), `${'&&'}`, romeo.calcCurAge());
console.log(juliet.__proto__.__proto__.__proto__);

const arr = [3, 4, 5, 5, 4, 5, 5, 2, 2, 2, 2, 2];
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

//Coding Challenge One
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('mercedes', 95);

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

bmw.brake();
bmw.brake();
bmw.brake();
bmw.brake();

mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
*/

const person = class {};
