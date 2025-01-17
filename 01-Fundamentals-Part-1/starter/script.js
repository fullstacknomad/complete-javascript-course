
//-----------variables----------
/*
let name = "James Bond"
let $new= "new is a keyword so adding $"
let _function = "we can use _before naming if it is a keyword"
const PI=3.1415;
let firstName = "CamelCase"

console.log(name);
console.log($new);
console.log(_function);
console.log(PI);
console.log(firstName);

let myFirstJob= "Ninja"
let myCurrentJob= "Teacher";
*/

// --------------data types--------------
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof(javascriptIsFun));
javascriptIsFun = "YES!!!"
console.log(javascriptIsFun)
console.log(typeof(javascriptIsFun))

let course = {
    title:"Modern Javascript",
    duration:"23 hrs"
}
console.log(course)
console.log(course.title)
console.log(course.duration)
console.log(typeof(course))


console.log(typeof(23)); //number
console.log(typeof("door:714"))// string

let children; // undefined
console.log(children)
console.log(typeof(children));

let age = 25; // integer
let price = 99.99; // floating-point
console.log(age, price);
console.log(typeof(age))
console.log(typeof(price))

let fullName = "John Doe";
let greeting = `Yeah Boiiii, ${fullName }!`; // template literal
console.log(fullName, greeting);


let isLoggedIn = true; //bool
let hasPermission = false; //bool
console.log(isLoggedIn, hasPermission);


let emptyValue = null;
console.log(emptyValue); // output: null
console.log(typeof(emptyValue)) // outputs object, regarded as object in js


let id = Symbol("id"); //A unique and immutable value, often used as object keys.
let id2 = Symbol("id");
console.log(id === id2); // Outputs: false (Symbols are always unique)

let bigNumber = 1234567890123456789012345678901234567890n; // Add 'n' at the end
let anotherBigInt = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber, anotherBigInt);
*/

// ---------let,var,const----------
/*
//1. let --->>> can change later during execution(block scoped)
let age = 30;
age=31; // mutate the variable/reassigned the variable
//2. const--->>> cannnot be changed in future
const PI =3.1415
const birthYear=2000;
birthYear=2001 // cannot reassign and are not mutable/immutable
console.log(birthYear) //TypeError: Assignment to constant variable.
const job; // value not initialized
console.log(job) //SyntaxError: Missing initializer in const declaration
//3. var---> like let older version// (functioned scope)
var work="programmer"
work="teacher"
//4. without any keyword
fname="John"
console.log(fname)
*/

//---------operators---------

/*
// math operators
let year= 2040;
let ageNinja = year - 2010;
let ageSamurai = year - 2000;
console.log(ageNinja,ageSamurai)

console.log(ageNinja * 2)
console.log(ageSamurai/10)
console.log(2**3)

console.log("age of ninja: "+ageNinja+" and age of samurai: "+ageSamurai)

console.log(typeof(ageNinja))

let sum = ageNinja + ageSamurai;
console.log(sum)

// assignment operators
sum+=100; //assignment + addition , +adds first then = assigns
// (alternative to sum= sum + 100)
sum*=100;
sum/=10;
sum++; //sum= sum+1
sum--;// sum= sum-1

console.log(sum)

// comparision operators
console.log(ageNinja>ageSamurai)
console.log(ageNinja<ageSamurai)

let ageTodrink =18;
let myage= 18;
let yourage = 17;
let theirage= 20;
console.log("----legal age----")
console.log(myage==ageTodrink);
console.log(yourage>=ageTodrink);
console.log(theirage>=ageTodrink);
*/
// ---------operator precedence-------------
/*
// = is right to left , - is left to right precedence
let x,y;
x= y = 25-10-5;
console.log(y)
console.log(x)

let ageSarah= 24;
let ageMaria= 27;
let avgAge = (ageMaria+ageSarah)/2;
console.log(avgAge)
*/
//---------strings and template literals----------

/*
const firstName = "John"
const birthYear = 2000;
const job= "teacher"
const currentYear = 2040;

const message = "I'm "+firstName+ ", a "+(currentYear-birthYear)+" year old "+job;
// type coercion happening (currentYear-birthYear) number type is converted to string
console.log(message)
// template literal uses backticks
const templateLietralText = `i'm ${firstName}, a ${(currentYear-birthYear)} year old ${job}`;
console.log(templateLietralText)


console.log(
    'string \n\
    with \n\
    multi line'
);

// this will be used in inserting html while working in js
console.log(
    `
    String
    with
    multiple lines
    `
)
    */

//-----------taking decision if else--------------

/*

const age = 12;

const isOldEnough = age >= 18; // comapred by bool here it returns true
console.log(isOldEnough)

if(isOldEnough){
    console.log("Cheers 🍻")
}
else{
    console.log(`Wait till ${(18- age)} years, till then have some 🥛`)
}
    */

// -----------type conversion(manual/explicitly) and coercion(automatically/implicitly)--------------
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear),typeof(Number(inputYear)), inputYear, typeof(inputYear));
console.log(Number(inputYear)+18);

console.log(typeof('Ninja'))
console.log(typeof(NaN))

console.log(String(23),23)
//  type coercion

console.log('I am '+23+' year old')
// + operator triggers type coercion to convert 23 number to [string]
console.log('23'-'3'-10);
// - operator does nothing it just works as if it is a number.
console.log('20'/'10')
//  does the same
console.log('20'*'10')
// does the same

let n = '1'+1;
n = n-1;
console.log(n);
*/

// --------truthy falsy value--------

// falsy value : 0,'', undefined, null, NaN, false
/*
// List of falsy values
const falsyValues = [0, '', undefined, null, NaN, false];

// Logging each value with its boolean conversion
falsyValues.forEach(value => {
  console.log(`Value: ${value}, Boolean: ${Boolean(value)}`);
});

console.log("----------------------------")
// truthy value : [1, 'hello', [], {}, true, 42, -42, Infinity, -Infinity, 'false'(false is string here "" is used)]
// List of truthy values
const truthyValues = [1, 'hello', [], {}, true, 42, -42, Infinity, -Infinity, 'false'];

// Logging each value with its boolean conversion
truthyValues.forEach(value => {
  console.log(`Value: ${value}, Boolean: ${Boolean(value)}`);
});
*/

// ------equality operator == and ===
// == does type coercion loose equality opeartor
// === does not do type coercion
/*
const age= '18';
if(age==18)
    console.log("yup 18 loosely")
if(age===18)
    console.log("yup 18 not so loosely")
console.log('18'==18) // true
console.log('18'===18) // false (this operator checks types too)


let favourite = prompt("What is you favourite number?");
console.log(favourite)
console.log(typeof(favourite)) // string type
*/

// -----------logical opearators-------------
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)


const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log('Sarah is able to drive.')
}
else{
    console.log('Someone else should drive...')
}

const isTried = true;
console.log(hasDriversLicense && hasGoodVision && isTried)
*/

// -----------switch ------------
/*
const day = "monday"

switch(day){
    case 'monday':
        console.log('plan course structure')
        console.log('go to coding')
        break;
    case 'tuesday':
        console.log('prepare theory videos')
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write code examples")
        break;
    case 'friday':
        console.log("record videos")
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy the weekend")
        break;
    default:
        console.log("not a valid input")
}
*/
/*
// ----------statements and expressions-----------
// expressions : returns  value
3+4
1991
true && false
//  statements are just actions

if(23>0){
    const str = '23 is bigger';
}
// in template literals we can only use expressions not  statements
`${num1+num2}` // will work
`${if(23>0){
    const str = '23 is bigger';
}}` // this won't
*/

// ---------ternary opearators-----------
/*
const age = 13;
console.log(`i like to drink ${age>=18 ? "wine 🍷":" milk 🍼 "}`)
*/