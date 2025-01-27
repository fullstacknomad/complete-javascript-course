// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
let x = 45;

const age = birthyear => 2037 - birthyear;
console.log(age(1998)); */

//using google stackoverflow and mdn

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [
  3,
  -2,
  -6,
  -1,
  'error',
  9,
  13,
  17,
  'error',
  15,
  14,
  9,
  5,
]; /*
console.log(temperatures);
// ---------------------------------------------
function cleanArr(arr) {
  //make valid array
  const validArr = arr.filter(arr => typeof arr === 'number');
  console.log(validArr);
  // find max and min
  let min = Math.min(...validArr);
  let max = Math.max(...validArr);
  console.log(min, max);
  console.log(max - min);
}
cleanArr(temperatures); */
//----------------------------------------------
/*
function cleanArray(arr1, arr2) {
  console.log(arr1, arr2);
  let arr = arr1.concat(arr2);
  console.log(arr);
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min, max);
  console.log(max - min);
}
cleanArray(temperatures, temperatures2); */
