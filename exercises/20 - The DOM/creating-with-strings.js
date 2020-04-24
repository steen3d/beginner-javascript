console.log('text');
const item = document.querySelector('.item');

console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;

const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));

console.log(myFragment);
