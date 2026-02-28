'use strict';
//OBJECT ORIENTED PROGRAMMING
//Constructor Functions

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const author = new Person('CodeVortex', 1999);
console.log(author);
