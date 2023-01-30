// Problem 1:

/*
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

Answer:
The code logs 1 to the console.

*/

// Problem 2:

/*
In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. Add a 
function to this program that solicits the user's first and last names in separate invocations; the function 
should return the appropriate name as a string. Use the return values to greet the user with their full name.

Answer:
function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

*/

// Problem 3:

/*
Write a program that uses a multiply function to multiply two numbers and returns the result. Ask the user 
to enter the two numbers, then output the numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566

Answer:
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

*/

// Problem 4:

/*
What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

Answer:
It doesn't log anything. The return on line 3 terminates the function before it can log anything.

// Problem 5:

/*
What does the following code log to the console?

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

The program doesn't log anything.

*/

// Problem 6:

/*

In the code shown below, identify the following items:

    the function arguments
    the function body
    the function declaration
    the function invocation
    the function name
    the function parameters
    the function return value
    the names of all variables in this program

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

Answer:
arguements = 2, 3, 4
body = the code between the curly brackets
declaration = from the function keyword to the closing curly bracket
return value = result
parameters = num1, num2, num3
variables = multiplyNumbers, num1, num2, num3, result, product
invocation = multiplyNumbers(2, 3, 4)

*/

// Prolbem 7:

/*
Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

Answer:
printing Hello
returning undefined

*/

// Problem 8:

/*
Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

Answer:
42
3.1415

*/

// Problem 9:

/*
Identify all of the variables named on each line of the following code. You may assume that question 
is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

*answers that are wrong initially*

Answer:
line1 = multiply, left, right
line2 = product, left, right
line 3 = product
line 6 = getNumber, prompt
line 7 = *parseFloat*, *question*, prompt
line 10 = left, getNumber
line 11 = right, getNumber
line 12 = *console*, left, right, multiply 

*/

// Problem 10:

/*
Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, 
you may assume that the code from Exercise 9 is the entire program.

Global = multiply, left, right, getNumber, console, parseFloat, question
Local = left, right, product, prompt

*/

// Problem 11:

/*
Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and 
right variables on lines 10-12? Explain your reasoning.

Answer:
I got this wrong initially! No they're not the same variables. 

*/