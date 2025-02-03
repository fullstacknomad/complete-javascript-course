'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); //gobal variable

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Ninja'; // this will be fetched first, as js looks up in the current scope first
      const str = `Oh you are a millenial, ${firstName}`; //firstName is global variable
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); //const,let are block scoped, str is block scoped, will not work
    console.log(millenial); // var is not block scoped, it is function scoped, will work
    // add(2, 3);//Uncaught ReferenceError: add is not defined
  }
  printAge();
  return age;
}

const firstName = 'Jinja';
calcAge(1991);
// console.log(age);
// not have access to age will be errorscript.js:16 Uncaught ReferenceError: age is not defined
 */

/* console.log(this);

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(this);
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(this); // doesnt have its own this, so parentsthis is  used(window object)
};
calcAgeArrow(1991); */

/* const ninja = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(this.year);
  },
};
ninja.calcAge();

const samurai = {
  age: 23,
};

samurai.calcAge = ninja.calcAge; //function borrowing
samurai.calcAge(); */

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
