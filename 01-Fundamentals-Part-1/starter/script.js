
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
