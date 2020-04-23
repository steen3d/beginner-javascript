## Scope

window is global scope for the browser

var is attached to the window, let and const aren't

functions are also added to the window

variable in a function are only available inside that function

Scope lookup - function looks a level higher until it finds a ref if it can't find var in current scope

Block scope
Curly brackets = block scope

Lexical scoping - scope lookup happens where vars are defined, not where they are run

Best Practice:
Try not to create global variables

Functions get scoped the same as variables

## Hoisting

Function and Variable declarations get hoisted the top of the script
* Does not hoist assigned values, just the declaration

## Closures

When you create a function that has a variable that is in a lower scope within, variables in the lower scope will still be able to access the parent scope even after it's called(or closed).