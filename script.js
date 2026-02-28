'use strict';
//OBJECT ORIENTED PROGRAMMING
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

console.log(juliet.calcCurAge(), romeo.calcCurAge());
