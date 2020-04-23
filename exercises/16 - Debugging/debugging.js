const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

console.table(people);


// Console Methods

// Callstack, Stack Trace
// Uncaught ReferenceError: doesntExist is not defined
//     at greet (debugging.js:45)                       <----  In the greet() function at line 45
//     at go (debugging.js:50)                          <----  In the go() function ^
//     at <anonymous>:1:1                               <----  It ran from console ^

// Grabbing Elements
// $0 in the console will give what you have selected in the elements tab (last element clicked)
// $1 is second to last etc.
// $('p') will find first element that matches selector(not a jquery thing, console shorthand)
// $${'p'} will find all of the elements that match

// Breakpoints
// debugger; sets a break point and will pause execution
// Sources tab
// You can click line number in sources tab to place a break point

// Scope

// Network Requests
// Shows files and network requests - you can see where things are slow

// Break On Attribute
// R-click element in elements -> break on attribute modifications - Will pause when an attribute changes
// You can also set things to break on events like click, or fetch requests

// Some Setup Code

people.forEach((person, index) => {
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log("Done!");
  // console.groupEnd(`${person.name}`);

})

function doctorize(name) {
  console.count(`running doctorize for ${name}`); // Count will differentiate for different vars
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
