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


