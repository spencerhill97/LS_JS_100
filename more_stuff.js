// Problem 1:

/*
What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

Answer:
[1, 4, 3];

*/

// Problem 2:

/*
What do the following error message and stack trace tell you?

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

Answer:
1.) the error type is a ReferenceError
2.) greeting is not defined
3.) the error occurs on line 4 and column 15
4.) the error occured in the exercise2.js file

*/

// Problem 3:

/*
Write some code to output the square root of 37.

Answer:
console.log(Math.sqrt(37));

*/

// Problem 4:

/*
Given a list of numbers, write some code to find and display the largest numeric value in the list.

Answer:
console.log(Math.max(1, 6, 3))
console.log(Math.max(-1, -6, -3, -2))
console.log(Math.max(2, 2))

*/

// Problem 5:

/*
What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

Answer:
The following function takes a string as it's argument. The function first invokes the split
method on the argument that's passed to the function and each element will start and end at
the spaces of the string. Then the reverse method is invoked on the new array and mutates the
caller by reversing the array. Finally the map method is invoked and the callback transforms 
each element of the calling array into the length of the element. The function returns a new
array.

// Problem 6:

/*
Write a function that searches an array of strings for every element that matches the regular 
expression given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

Answer:
function allMatches(array, regex) {
  let result = [];
  array.forEach(word => {
    if (regex.test(word)) {
      result.push(word);
    }
  })

  return result;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

*/

// Problem 7:

/*
What is exception handling and what problem does it solve?

Answer:
* my answer wasn't as optimal *
Exception handling is a process that deals with errors in a manageable and predictable manner.
It uses the try/catch statement to catch exceptions that the code in the try block raises, 
and lets the programmer deal with the problem in a way that makes sense and perhaps prevents 
a catastrophic failure or nasty bug.
*

*/

// Problem 8:

/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses 
concepts you learned earlier in the book. If you can't figure out the answer, don't worry: 
this question can stump developers with more experience than you have.

Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false 
otherwise. You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true 
if the value passed to it as an argument is NaN, false if it is not.

Answer:
function isNan(value) {
  return value !== value;
}

*/

// Problem 9:

/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it 
uses concepts you learned earlier in the book. If you can't figure out the answer, don't 
worry: this question can stump developers with more experience than you have.

Earlier, we learned that JavaScript has multiple versions of the numeric value zero. 
In particular, it has 0 and -0. These numbers, while being mathematically nonsensical, 
are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but 
it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the values are 
distinct:

> 0 === -0
= true

> String(-0)
= '0'

Fortunately, you can use Object.is to determine whether a value is -0:

> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true

There are other ways to detect a -0 value. Without using Object.is, write a function that 
will return true if the argument is -0, and false if it is 0 or any other number.

Answer: *I did not know this one*
function isZeroOrNegativeZero(number) {
  return 1 / number === -Infinity;
}

*/

// Problem 10:

/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses 
concepts you learned earlier in the book. If you can't figure out the answer, don't worry: 
this question can stump developers with more experience than you have.

Consider this code:

> let x = "5"
> x = x + 1
= "51"

Now, consider this code:

> let y = "5"
> y++

What gets returned by y++ in the second snippet, and why?

Answer: *I got this wrong! Solution below*
The return value is the numeric value 5.

If you apply ++ to a string, JavaScript coerces it into a number. In this case, "5" gets 
coerced to the number 5. After coercion, it then increments the value to 6. However, the 
return value is 5 since the post-increment operator (y++) returns the original value of y, 
not the incremented value.

This shows that x++ is not the same thing as x = x + 1.

*/
