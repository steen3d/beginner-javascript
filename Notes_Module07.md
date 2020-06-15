## BEDMAS

Order of operations

Brackets (Technically parenthesis in js)
Exponents \*\* in js
Division
Multiplication
Subtraction

## Flow control

if statement

if (condition) {
block - if first condition is true the others will never run
} else if (another condition){
block
} else if {
block
} else {
nothin is true
}

regex - always starts and closes with a /
/\s/g, '-' - find space(\s), all of them(/g), and replace with -

Instead of an if else, you can just return out of the function that's running

Operators:
== checks values but not type - use to check if a value is null or undefined
=== checks value and type - Use this the majority of the time
!== not equal - type and value
Greatet than >, less than < only ever work no numbers not strings - will convert to number if a string
|| or - in a succession of || only on true is needed to make the whole statement true
&& and - in a succession of && one false will make the whole statement false
Breaking things out into variable and checking if(myVar) can make statement much more readable

Truthy values:
1
-10
Full string
"0" - any string with content
empty array
empty object

Falsy values:
0
undefinded
null
NaN

Use .length to check if something is in an array
use Object.keys({}).length

## Coercion Ternaries and Conditional Abuse

if-statements.js

! in front of bool always flips it - also forces(coerces) var type to bool
!! coerces into a real boolean

Ternary - Shorthand if

1. condition
2. what to do if true
3. what to do if false

## Intervals and timers
See intervals-cs.html