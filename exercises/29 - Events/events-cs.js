console.log('It Works');

// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('It Got Clicked');
// }

// butts.addEventListener('click', handleClick); // Go get something, listen for something, do something
// coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick); // You have to provide the function you are no longer listening for

// const hooray = () => console.log('HOORAY!'); // Function name is inferred fro, variable name

// coolButton.addEventListener('click', hooray);

// Listen on multiple items

// function addBuyButtonListeners(buyButton) {
//   buyButton.addEventListener('click', handleClick);
// } // the argument you pass to the function is what the forEach loop is currently working on - browser supplies this by default

const buyButtons = document.querySelectorAll('button.buy');
// console.log(buyButtons);
// Can't just add lister to the buyButtons node list. Have to add to each element individually

// buyButtons.forEach(addBuyButtonListeners);

// Same thing with arrow functions, can't unbind
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('You Clicked It');
//   });
// });

function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(event.target); // The element that fired the event
  console.log(event.currentTarget); // The thing that was clicked
  // Prevent this event from bubbling up
  // event.stopPropagation();
} // event has to be first arg of callback

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('Window Clicked!');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log(this);
}); // 'this' is always === what is to the left of the dot - using the event is better than 'this' here because scope is different with arrow functions
