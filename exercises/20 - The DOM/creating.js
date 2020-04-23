const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'A random image';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage); // Adding these in this order will cause a reflow / repaint on the page
// Append items to div before adding to the page'

const heading = document.createElement('h2');

myDiv.insertAdjacentElement('afterbegin', heading);

// Create ul with js

const myList = document.createElement('ul');
for (let i = 0; i < 5; i++) {
  const newListItem = document.createElement('li');
  newListItem.textContent = `Item ${i + 1}`;
  myList.appendChild(newListItem);
}

// myList.insertAdjacentElement('afterbegin', myListItem);
document.body.insertAdjacentElement('afterbegin', myList);
console.log(myList);

const duplicateList = myList.cloneNode(true);
myList.insertAdjacentElement('afterend', duplicateList);
