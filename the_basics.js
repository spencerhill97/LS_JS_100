// Problem 1:

/*
let name = 'Spencer' + ' ' + 'Hill';
*/

// Problem 2:

/*
Using Arithmetic operators, get the individual digits of a 4-digit number like 4936:

let number = 4936;
let ones = number % 10;
console.log(ones);

number = (number - ones) / 10;

let tens = number % 10;
console.log(tens);

let hundred = number % 10;
console.log(hundreds);

let thousands = (number - hundreds) / 10;
console.log(thousands);
*/

// Problem 3:

/*
Identify the data type for each of the following values

  'true' -> string
  false -> boolean
  1.5 -> number
  2 -> number
  undefined -> undefined
  { foo: 'bar' } -> object

*/

// Problem 4:

/*
Explain why this code logs '510' instead of 15.

console.log('5' + 10);

This code logs 510 because it coerces the number into a string. Everytime you use the addition operator
the JS engine will implicitly attempt to coerce the other non-string values into a string. The number 10
is coerced into '10' and JS concentates the two values together.

*/

// Problem 5:

/*
Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log(+(5) +10);

*/

// Problem 6:

/*
Use the template literal syntax along with the expression Number(5) + 10 to log the following sentence to the console.

The value of 5 + 10 is 15.

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);
*/

// Problem 7:

/*
Will an error occur if you try to access an array element with an index that is greater than or equal to the length 
of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

No, JS will return undefined. When elements that are called that have no assignment they return undefined.
*/

// Problem 8:

/*
Create an array named names that contains a list of pet names. For instance:

let names = [asta, butterscotch, pudding, neptune, darwin];

*/

// Problem 9:

/*
Create an object names pets that contains a list of pet names and the type of animal. For instance:

let pets = {
  asta:         'dog',
  butterscotch: 'cat',
  pudding:      'cat',
  neptune:      'fish',
  darwin:       'lizard',
};

*/

// Problem 10:

/*
What value does the following expression evaluate to?

'foo' === 'Foo'

false

*/

// Problem 11:

/*
What does the following expression evaluate to?

parseInt('3.1415')

3

*/

// Problem 12:

/*
What does the following expression evaluate to?

'12' < '9'

true

*/
