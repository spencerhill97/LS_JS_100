// Problem 1:

/*
Given the following code, how can you access the name of the person?

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

Answer:
person.name

*/

// Problem 2:

/*
Which of the following values are valid keys for an object


    1
    '1'
    undefined
    'hello world'
    true
    'true'

Answer:
They're all valid keys for an object. JS will coerce the values that are not strings into strings.

*/

// Problem 3:

/*
Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. 
The object should contain at least 3 elements. You should place your code between the braces in the let statement

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

Answer:
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

*/

// Problem 4:

/*
Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must 
not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

Answer:
let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }

*/

// Problem 5:

/*
Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

Answer:
const myObj = Object.create(myProtoObj);

*/

// Problem 6:

/*
Which of the following values are primitive values? Which are objects? Which are neither?


    "foo" -> primitive
    3.1415 -> primitive
    [ 'a', 'b', 'c' ] -> object
    false -> primitive
    foo -> neither
    function bar() { return "bar"; } -> object
    undefined -> primitive
    { a: 1, b: 2 } -> object

*/

// Problem 7:

/*
Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following 
code snippets:

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

Answer:
myObj.qux = 3;

*/

// Problem 8:

/*
Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy 
and an array of the keys that you want to copy. Do not mutate the original object.

The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the 
function should copy all of the existing keys from the object.

Here are some examples for your reference:

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

Answer:
function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

*/

// Problem 9:

/*
What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

Answer: 
The program logs hi and hello

*/

// Problem 10:

/*
How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? 
Identify those objects.

[1, 2, ["a", ["b", false]], null, {}]

Answer:
6

*/

// Problem 11:

/*
Write some code to replace the value 6 in the following object with 606:

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

Answer:
obj.bar[3].xyz

*/

// Problem 12:

/*
As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code 
to work as intended.

function foo(bar) {
  console.log(bar, bar, bar);
}

*let bar = foo;* <--- Answer

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

*/

// Problem 13:

/*
As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

function foo(bar) {
  console.log(bar());
}

foo();    // Should print 'Welcome'
foo();    // Should print 3.1415
foo();    // Should print [1, 2, 3]

*I did not know the answer for this one!*
Answer:
foo(function() {return 'welcome'});
foo(function() {return 3.1415});
foo(function() {return [1,2,3]});

*/

// Problem 14:

/*
Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the 
code has not been executed). Don't panic if you miss a few items - this exercise is more challenging than it looks.

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

Answer:
Variables: hello, greeting, name, xyzzy, howdy, foo
Property Names: a, b, c, d, *0, 1, 2* didn't get the array indexes right
Primitive Values: a, b, c, 1, 2, 3, 4, 5, hi, grace, ' '
Objects: hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}

*/

// Prolbem 15:

/*

Identify all of the variables, object property names, primitive values, and objects in the following code. This problem 
is even more challenging than the previous one.

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

Answer:
Variables: bar, arg1, arg2, foo, qux, result
Property Names: abc, 0, 1, 2, 3, 4, def, ghi, jkl, mno, pqr
Primitive Values: 'Hello', 1, 2, 3, 4, 5, 6, abc, def, ghi, jkl, mno, pqr, NaN, null, 'Victoria', 'Antonina', 0, 1, 2, 3
Objects: quex, bar, [1, 2, 3, [4, 5, 6]], [4, 5, 6]

*/
