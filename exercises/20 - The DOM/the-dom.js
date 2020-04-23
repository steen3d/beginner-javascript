const pic = document.querySelector('.nice');
console.log(pic.classList);

pic.alt = 'Some descriptive text about the photo'; // setter
console.log(pic.alt); // getter
pic.width = 200;
console.log(pic.naturalWidth); // fires before content loaded and will return 0

pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
});

pic.setAttribute('alt', 'Some alt text');
