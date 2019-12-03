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