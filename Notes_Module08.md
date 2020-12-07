##Objects 

Groups of properties and value - order of properties doesn't matter

{} - object literal syntax

can also do:

const person = new Object({
  age:100,
  name: Wes
});
not common, though

If property has the same name as the var for a value you can just use variable name:
const age = 100;
const person = new Object({
  age,
  name: Wes
});

Property can have spaces and dashes if you put your property name in quotes

Trailing comma(comma dangle) on last property makes life easier when modifying in git

You can nest objects

person.job = 'Web Developer'; - add property

person.age = 50;

You can change the values in the object of a const, but the actual object can't be reassigned

const wesFroze = Objects.freeze(wes); - immutable, can't be changed

const propertyToCheck = prompt('What do you want to check')
console.log(wes[propertyToCheck]); - Square brackets are needed to use a variable as the property name, otherwise it would be looking for a property called 'propertyToCheck'

You also need square bracket notation to access properties that use names that aren't allowed for variables such as 'my-property' or 'property name' - object['wonky property']

Trying to access a property of an undefined object will throw an error - There's a proposal that will check many levels deep starting at the top to show what's missing

<input type="text" name="first" value="wes">

const nameInput = document.querySelector('[name="first"]');
const name = nameInput ? nameInput.value : ''; - returns name value if input element exists, returns empty string if it doesn't

delete wes.job; - remove property

Method is a function that lives inside an object

const person = new Object({
  age:100,
  name: Wes,
  sayHello: function (greeting = 'Hey') {
    return `${greeting} ${this.name}`
  }
});

wes.SayHello() - returns "Hello wes"

const person = new Object({
  age:100,
  name: Wes,
  sayHello(greeting = 'Hey') {  <----- Method shorthand
    return `${greeting} ${this.name}`,
  sneeze: () => {                 <----- Arrow functions work, but no 'this' keyword>
    console.log('Achoooo');
  }
  }
});

## Obj Ref vs Value

When you set the val of a var to that of another that's a string, it copies and pastes the value from one to the other

When comparing objects it's by ref to the object itself regardless of contents

When objects or arrays are referenced using a second var it is just pointing to the first one
const object1 = {
  name: 'Chris',
  age: 41,
}

cost object2 = object1;

object2.name = 'Katie';

console.log(object1.name); // returns 'Katie' because object2 just points to object1;

spread:

  const person3 = {...person1}; - takes ever item in an object and spread it into a new object

older method of copying objects:
  
  const person3 = Object.assign({}, person1); - folds one object into another

lodash: library that has methods that let you clone objects and much more cloneDeep
unpkg: 

You can spread properties from multiple objects into one new object: 
const inventory = { ...meatInventory, ...veggieInventory}; - resulting object would be all properties from both inventories
Duplicate properties get overwritten by last added

If you pass an object to a function when you change the data in that function it changes the data for the external object

## Maps

setting a map with myMap.myProperty will not add it to the [[Entries]]
keys can be any type
Key properties maintain order

you can loop over all entries on a map with forOf(gives property and value) or forEach

Destructuring lets you create variables of map items
Can't put methods into maps

JSON.stringify(person); - converts object to text
JSON.parse({'some json'})

JSON does not understand maps yet - you have to convert to an object first, which is tricky

## Arrays
see array-cs.html

Item, Index
Item can be any type
Array.isArray(names); - lets you know if it's an array - array is just an object in js
const myArray = []; array literal notation
array.length is not zero based
myArray[array.length - 1] - will get you the last item
mutable: perform mutations ie. changes the original data. - array.reverse() will change the data
immutable: create a new array with modifications - array.slice returns the result without modifying the data

slice - specify range to get - will not get last item
array.slice with no end number provided will just get the rest of the array.

splice - mutable - removes a number of items. index provided + provided number to remove

## Static Methods

More Array Cardio the JS30 course

Static method vs method on object

Array(Capital A) has a lot of methods for working on arrays, but is not a part of the actual array object - these are static methods

Array.from creates an array from an object with a length

Instance Methods exist on every array