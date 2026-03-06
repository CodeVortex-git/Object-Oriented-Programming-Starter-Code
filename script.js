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
mercedes.accelera
te();
mercedes.accelerate();

// const PersonCl = class {};
//ES6 Classes
class PersonCl {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2026 - this.birthYear);
  }
}

const sophiat = new PersonCl('Sophiat', 1999);
sophiat.calcAge();

const account = {
  owner: 'Code Vortex',
  movements: [120, 233, 533, 911, 666, 999],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 1000;
console.log(account.movements);

//Object.create()
const NewPersonProto = {
  calcAge() {
    return 2026 - this.birthYear;
  },

  init(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;

    console.log(`${firstName} is currently ${this.calcAge()} years old.`);
  },
};

const vortex = Object.create(NewPersonProto);
vortex.init('Code Vortex', 2000);
vortex.calcAge();

//Codng Challenge 2

class NewCar {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return this.speed;
  }

  brake() {
    this.speed -= 5;
    return this.speed;
  }
  get speedUs() {
    return this.speed / 1.6;
  }


  set speedUs(s) {
    this.speed = s * 1.6;
  }
}

const ford = new NewCar('Ford', 120);
const lambo = new NewCar('Lamboghini', 75);
lambo.speedUs = 120;
console.log(ford.speedUs);
console.log(ford.accelerate());
console.log(lambo.speedUs);

//Inheritance between classes
//Parent Element
const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  return 2026 - this.birthYear;
};

const Vortex = new Person('Vortex', 1999);

Vortex.calcAge();
// console.log(Vortex.name);

//Child Element
const Student = function (name, birthYear, course) {
  Person.call(this, name, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(
    `My name is ${this.name}. I am ${this.calcAge()} years old. I am studying ${this.course}`,
  );
};
const Vixen = new Student('Vixen', 2000, 'Cybernetics');
Vixen.introduce();
Vixen.calcAge();

*/
//Coding Challenge 3

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 20;
    return this.speed;
  }

  brake() {
    this.speed -= 5;
    return this.speed;
  }
  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(s) {
    this.speed = s * 1.6;
  }
}

//Electric Vehicle
class CarEv extends Car {
  //Linking Electric Vehicle to the Car class
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  //Tesla going at a speed of 140km/h, with a charge of 22%
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`This ${this.make} is now charged to ${this.charge}%`);
  }

  accelerate() {
    super.accelerate();
    this.charge -= 1; //Reduce the charge by 1
    console.log(
      `This ${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`,
    );
  }

  brake() {
    super.brake();
    console.log(`This ${this.make} is going at ${this.speed}km/h`);
  }
}

const tesla = new CarEv('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();
tesla.brake();

tesla.chargeBattery(100);
