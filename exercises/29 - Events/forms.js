console.log('It Works!');

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
  console.log('You clicked it');
  event.preventDefault();
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault(); // Submit puts server params in url - usually want to stop submission and handle with js
  }
  console.log(event);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'

const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
