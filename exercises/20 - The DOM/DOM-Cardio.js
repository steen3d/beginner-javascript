// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.append(myDiv);

// make an unordered list
const myList = document.createElement('ul');
console.log(myList);

// add three list items with the words "one, two three" in them
const myListItem2 = document.createElement('li');
const myListItem1 = document.createElement('li');
const myListItem3 = document.createElement('li');
myListItem2.textContent = 'two';
myList.appendChild(myListItem2);
myListItem1.textContent = 'one';
myListItem2.insertAdjacentElement('beforebegin', myListItem1);
myListItem3.textContent = 'three';
myListItem2.insertAdjacentElement('afterend', myListItem3);
// could have just done entire list as a string, then div.innerHtml = myList;

// put that list into the above wrapper
const wrapper = document.querySelector('.wrapper');
console.log(wrapper);
wrapper.appendChild(myList);
// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.setAttribute('src', 'https://picsum.photos/500');
// set the width to 250
myImage.setAttribute('width', 250);
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.setAttribute('alt', 'Cute Puppy'); // or myImage.alt = 'Cute Puppy'
// Append that image to the wrapper
wrapper.appendChild(myImage);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div>
    <p></p>
    <p></p>
  </div>
`;
console.log(myHTML);
// put this div before the unordered list from above
const myFragment = document.createRange().createContextualFragment(myHTML); // could also just have grabbed myDiv

let myAmazingDiv = myFragment.querySelector('div');
console.log(myAmazingDiv);
myList.insertAdjacentElement('beforebegin', myAmazingDiv); // could have used insertAdjacentHTML with the myHTML string
// add a class to the second paragraph called warning
myAmazingDiv = wrapper.querySelector('div');
myAmazingDiv.lastElementChild.classList.add('warning'); // could have used myAmazingDiv.children[1].classList.add('warning');
// remove the first paragraph
myAmazingDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const ageindogyears = age * 7; // this didn't have to be a new var, could jsut be a statement inside the template
  return `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageindogyears}. That would be a tall dog!</p>
      <button class='delete' type='button'>Delete</button>
    </div>
  `; // could store html in a variable and just return that
}
// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards

const chandlerCard = generatePlayerCard('Chandler', 5, '3ft');
const katieCard = generatePlayerCard('Katie', 41, '5ft');
const chrisCard = generatePlayerCard('Chris', 41, '6ft');
// Instead of individual variables for each, could have just made one and appended to it:
// let cardsHtml = generatePlayerCard('Chandler', 5, '3ft');
// cardsHtml += generatePlayerCard('Katie', 41, '5ft');
// cardsHtml += generatePlayerCard('Chris', 41, '6ft');

// append those cards to the div
const chandlerCardFragment = document
  .createRange()
  .createContextualFragment(chandlerCard);
const katieCardFragment = document
  .createRange()
  .createContextualFragment(katieCard);
const chrisCardFragment = document
  .createRange()
  .createContextualFragment(chrisCard);
cardDiv.append(chandlerCardFragment);
cardDiv.append(katieCardFragment);
cardDiv.append(chrisCardFragment);
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = cardDiv.querySelectorAll('button');
function removeCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.parentElement.remove();
  // could have used clickedButton.closest('.playerCard').remove(); to look up the dom tree to the closest .playerCard - less dependant on structure, which is better
}
// make out delete function
// loop over them and attach a listener
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', removeCard);
}
// could use buttons.forEach(button => button.addEventListener('click', removeCard);)
