// Prolbem 1:

/*
What values do the following expressions evaluate to?

false || (true && false);  -> false
true || (1 + 2); -> true
(1 + 2) || true; -> 1 + 2
true && (1 + 2); -> 1 + 2
false && (1 + 2); -> false
(1 + 2) && true; -> true
(32 * 4) >= 129; -> 32 * 4
false !== !true; -> false
true === 4; -> false
false === (847 === '847'); -> true
false === (847 == '847'); -> false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; -> true

*/

// Problem 2:

/*
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function 
should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

Answer:
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/

// Problem 3:

/*
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is 
an integer. If it isn't, the function should issue an error message and return.

Answer:
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/

// Problem 4:

/*
What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

Answer:
Product2
Product3
Product not found!

This switch statement is missing break statements.

*/

// Problem 5:

/*
Refator this statement to use an if statement instead.

return foo() ? 'bar' : qux();

if (foo()) {
  return 'bar';
} else {
  return qux();
}

*/

// Problem 6:

/*
What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

Answer:
The program will execute the first if statement clause because it an empty array evaluates as truthy.

*/

// Problem 7:

/*
Write a function that takes a string as an argument and returns an all-caps version of the string when the 
string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello 
world' to 'HELLO WORLD', but don't change 'goodbye'.

function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

*/

// Problem 8:

/*

Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), 
greater than 100, or less than 0.

25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

*/