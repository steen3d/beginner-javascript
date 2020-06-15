console.log('IT WORKS');

const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card'); // Looks up the tree for elements
  // Grab image source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description; // card.dataset gets data attibute data-description
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
    <p>${desc}</p>
  `;

  // show the modal
  modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner'); // If you click inside it will find the class if outside it won't - also, you can convert a statment to a bool by just putting a !
  console.log(isOutside);
  if (isOutside) {
    modalOuter.classList.remove('open');
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
