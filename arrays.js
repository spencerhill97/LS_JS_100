// Problem 1:

/*
In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4]; --> 4

let array2 = [1]; --> 5
array2.length = 5;

let array3 = []; --> 0
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5]; --> 3
array4.length = 3;

let array5 = []; --> 101
array5[100] = 3;

*/

// Problem 2:

/*
Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(num => {
  if (num % 2 === 0) console.log(num);
});

*/

// Problem 3:

/*
Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the 
numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(nested => {
  nested.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
});

*/

// Problem 4:

/*
We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a 
new array that contains one element for each element in the original array. If the element is an even value, then 
the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array 
should contain 'odd'.

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

*/

// Problem 5:

/*
Write a findIntegers function that takes an array argument and returns an array that contains only the integers from 
the input array. Use the filter method in your function

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

function findIntegers(array) {
  return array.filter(num => typeof Number(num) === 'number');
}

*/

// Problem 6:

/*
Use map and filter to first determine the lengths of all the elements in an array of string values, then discard 
the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let oddLengths = array.filter(string => string.length % 2 === 1);
  return oddLengths.map(string => string.length);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

*/

// Problem 7:

/*
Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
  return array.reduce((a, b) => a + (b * b), 0);
}

*/

// Problem 8:

/*
This problem is more challenging than most in this book. Don't worry if you can't solve it on your own.

Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the 
reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.reduce((acc, value) => {
    if (value.length % 2 === 1) {
      acc.push(value.length);
    }

    return acc;
  }, [])
}

*/

// Problem 9:

/*
Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes1(3) --> true
numbers2.includes2(3) --> false
numbers2.includes3(3) --> false

*/

// Problem 10:

/*
Write some code to replace the value 6 in the following array with 606:

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

*/
