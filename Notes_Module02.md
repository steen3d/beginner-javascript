## Functions - Built in
Math.max(10, 12); // Returns largest of two arguments
Math.parseFloat('1.23456'); // Returns 1.23456 as a float
Math.parseInt(1.234); // Returns 1
Date.now(); // Returns number of milliseconds since Jan 1 1970(or something) Calc time stamp at https://epoch.now.sh/
Navigator.vibrate(200) // Makes device vibrate for 200ms
Emmet Lorem200 // Generate 200 Lorem Ipsum characters
scrollTo(x, y) 
scrollTo({ top: 500, left: 0, behavior: 'smooth'}); // Can accept an object with values
Dictionary in JS just means an object with values set

## Functions - Custom

var myTotal = calculateBill(); // Capture returned value from function
var created inside of a function block is called a temporary variable and is garbage collected after function executes
console.log(`Your total is $${calculateBill()}`); // Function can be called in string

## Parameters and Arguments

When a function attempts to access data no provided in function it reaches outside a higher scope

Parameters are placeholders for data when declaring a function
Arguments are actual values that you pass the function to replace the parameters
myFunc1(myFun2(param)) // You can pass a function as a param in another function. Inside parenthesis happens first.
myFunc(name = "Chris"); // You can supply a default in case it is called without Arg. 
myFunc(name = ""); // You can set to empty string to keep it from erroring
mayFunc(name, undefined, age); // Pass undefined to get default

## Different Ways to Declare Functions

In JS functions are "First Class Citizens" - they can be used like any other value

function keywork - the standard way
anonymous function - has no name
Function expression - store function as value in a var
  const myFunc = function(arg){
    arg ++;
  }
Named functions get hoisted - moved to the top of the script - so that they are always available
Function expressions do not - if you try to run it before it's declared you will get undefined

Arrow functions - they are anonymous

function add( a, b = 3) {
  const total = a + b;
  return total;
}

const add = ( a, b = 3 ) => a + b; // Has implicit return
const add = ( a, b = 3 ) => ({ arg1: val1, arg2: val2}); // If implicitly returning an object wrap in ()

IIFE = Immediately Invoked Function Expression // Runs right away.

(function (age){
  console.log('Running the function');
  return `You are ${age} years old`;
})(40);

Method - A function that lives inside of an object

const chris = {
  name: 'Chris Steenerson',
  sayHi: function(){
    console.log('Hi Chris');
    return 'Hi Chris';
  },
  // Short hand method
  sayHi() {
    console.log('Hi Chris');
  },
  // Arrow method
  sayHi: () => {
    console.log('Hi Chris');
  }
}

Callback function