##Console
Typing node gets you into Node's repl(read-eval-print loop). You can type commands in the same fashion as in browser console. ctrl-c to exit

ctrl-k clear

## Running and Loading

Run script in node: node myScript.js

## Variables and Statements

Code blocks`{}` don't need semi colon after

var and let can be updated, const cannot

`'use strict';` at the top of your script will keep you from declaring variables without var, let, or const

var is function scoped, let and const are block scoped

variables only start with cap when a class, $ and _ are legal, but used mainly in jquery and lodash

camelCase, UpperCamelCase, snake_case, kebab-case(not allowed in js)

## Code Quality Tooling

ESLint: eslint.org/demo - Finds potential code issues
Prettier - Formats code

## Types

SNOB'N'US
String
Number
Object
Null
Undefined
Symbol

## Types - Strings

/* eslint-disable */ -- Turn off eslint for block
/* eslint-disable-line */ -- Turn off eslint for line
'String'
"String"
`String`
'Escape\'s are interesting' -- Backslash(because it leans back)
`Back tics
work with
multi-line strings` -- Great for html in a string

concatination - combine string
var hello = 'Hi I'm " + name + ", nice to meet you";

interpolation - var in a string
var hello2 =`Hi I'm ${name}, nice to meet you`;

const myHtml = `
  <div>
    <p>${myParagraph}</p>
    <h2>${myHeading}</h2>
  </div>
`

## Numbers

typeof myVar
typeof 123; //"number"
typeof "my string; //"string"
1 + "1"; //"11"
"5" * "5"; //25 -,*,/ will convert to number. + is loaded and will concat
Modulo operator 10 % 3; 1 // returns remainder
window.location = `https://${0.1+0.2}.com`; // goes to a page about floating point math
0.1 + 0.2 // 0.30000000000000004
10 ** 2 // 100 -- to the of
Numbers that go higher than the computer can process return Infinity or -Infinity which are typeof "number"
10 * "dog" // NaN which is typeof "number"

## Object

a collection of values -- can be thought of as sub-variabes

## Null and Undefined

undefined - created but not set
let myVal = null; // null is something that has a value that is set to nothing
can't create a const without setting a value

## Booleans and Equality
flag variable. set to true or false.
can be calculated or set
const age = 18;
const ofAge = age > 19; // false
= // updates or sets a var
almost always use triple equals - checks value and type // 10 === "10"; false,  10 == "10"; // true