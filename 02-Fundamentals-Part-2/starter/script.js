'use strict';
/*
// this string above helps in finding errors which js ignores.
let hasDriversLicense= false;
const passTest= true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive")
*/

/*
// ---------function ---------------
// function definition
function logger(){
    console.log("my name is Ninja")
}
logger(); //calling/invoking/running the function
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    let juice = `Juice with ${apples} apples and ${oranges} oranges`;
return juice;
}
console.log(fruitProcessor(3,5))

// ----------function decalaration and expression-----------
// declaration
function calcAge(birthYear){
    return 2037-birthYear;
}
const calcAge1= calcAge(2000)
console.log(calcAge1);
// expression
const calcAge2 = function(birthYear){
    return 2037-birthYear;
}
console.log(calcAge2(2005));


// NOTE: function decalartion: can be called even before decalartion. [HOISTING]
// function expression : can't be called before, you define it.

*/


//------------- arrow function-------------
/*
const birthYear = 1947

const ageCalc = function(birthYear){
    return 2037-birthYear;
}
let ageCalc2 = age => 2037-birthYear;

console.log(ageCalc(birthYear))
console.log(ageCalc2(birthYear))

const yearsLeftRetire = (birthYear,fname)=>{
    let age = 2037-birthYear;
    console.log(fname)
    return 65-age;
}
    console.log(`Years left to retire: ${yearsLeftRetire(1991,"Johny")}`)
 */


// -------functions calling other functions---------

/*
function cutFruits(fruit){
    return fruit *4;
}

function fruitProcessor(apples,oranges){
    let applePieces = cutFruits(apples);
    let orangePieces = cutFruits(oranges);
    console.log(applePieces,orangePieces);
    let juice = `Juice with ${apples} apples and ${oranges} oranges`;
return juice;
}
console.log(fruitProcessor(5,6))
 */

/* -------------------Arrays------------------ */

/* const friends = ["Ninja", "Samurai", "Demon Slayer"]
console.log(friends)

const years =  new Array(2000,1900,3000)
console.log(years)
console.log(years[0])
console.log(years[1])
console.log(years[2])
console.log(years.length)
console.log(years[years.length-1])

friends[2]="Blue Jay"
console.log(friends)

const firstName ="Jonas"
const jonas = [firstName,'Schmedtmaan',2037-1991,'teacher']
console.log(jonas)

function calcAgeOf (birthYear){
    return 2037 - birthYear
}

const birthYears = [2000,2010,1995,1999];
console.log(calcAgeOf(birthYears[0]))
console.log(birthYears[birthYears.length-1])
console.log(calcAgeOf(birthYears[birthYears.length-1]))

const ages= [
calcAgeOf(birthYears[0]),
calcAgeOf(birthYears[1]),
calcAgeOf(birthYears[2]),
calcAgeOf(birthYears[3])];

console.log(ages) */

/* -----------------array operations------------ */

/* const friends = ["Ninja", "Samurai", "Demon Slayer"]
console.log(friends);
console.log(friends.length);
const newLength = friends.push("Kai");
console.log(friends);
console.log(newLength) //push returns length after ading an item to teh array

friends.unshift("John") // adds item to start of  the array
console.log(friends);

 // removes last item of  the array, so no argument/parameter needed
const removedElement = friends.pop();
console.log(removedElement)
console.log(friends);
const removeFirst = friends.shift();
console.log(removeFirst);


const notFriends = ["Nainj", "uraamSi", "Demn Sloyear"]
console.log(notFriends.indexOf("uraamSi"))

notFriends.push(23)
console.log(notFriends.includes(23)); // returns true as 23 is present
console.log(notFriends.includes("23")); // returns false as it is a string and includes use strict equality , no type coercion is used for automatically type conversion

if(notFriends.includes("Nainj")){
    console.log("yes he is on blocked list");
} */


    /* ----------------Objects----------------- */

/* In arrays we can use only index/order number to access the values
while in objects  we can use names as the access keys to access their values */
/*
const friendsArr =["John", "Doe", "123 Main St, Springfield", "123-456-7890"]
console.log(friendsArr)
// object literal syntax to crearte an object
const friendObj = {
    fname: "John",
    lname: "Doe",
    address: "123 Main St, Springfield",
    phone: "123-456-7890"
  };
console.log(friendObj)

// ----------------------dot vs bracket -----------
console.log(friendObj.fname)
console.log(friendObj["fname"]) // key must be like string

const nameKey = "name";
console.log(friendObj["f"+nameKey])
console.log(friendObj["l"+nameKey])
// console.log(friendObj.'l'+nameKey); // wont work like this

const interestedIn = prompt("Interested in what ???");
console.log(friendObj.interestedIn)// wont work coz it is not key
console.log(friendObj[interestedIn]) // will work as it is used like a variable
 */

/* -----------------Object Methods------------
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    }
};

console.log(jonas.calcAge(jonas.birthYeah)) // calcAge(1991)
console.log(jonas['calcAge'](this.birthYeah))// calcAge(1991)
*/

/* -----------------the for loop ------------

for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }

*/

// Looping Arrays, Breaking and Continuing

/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

  const types=[];

  for(let i=0;i<jonas.length;i++){
    types[i]= typeof(jonas[i]);
    console.log(jonas[i],typeof(jonas[i]));
    console.log(types)
  }
 */
 /*  let years = [1991,2001,2004,1995,1993,1996,1997]
  let ages=[];
  for(let i=0;i<years.length;i++){
    ages.push(2025-years[i]);
  }
  console.log(ages) */
 /*  const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
} */