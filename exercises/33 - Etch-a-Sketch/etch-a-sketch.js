console.log('IT WORKS');
// Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // Uppercase_ means it's a true constant - just a style thing
// Setup our canvas for drawing
// const width = canvas.width;
// const height = canvas.height;
// Make a variable called height and width from the same properties on our canvas
const { width, height } = canvas; // Destructuring - takes properties and turns them into vars

// Create random x and y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
// Object destructuring - {key} - creates a var based on the property of the provided object
function draw({ key }) {
  // Increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  // Start Path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move our x and y values depending on what the user did

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

// Write a handler for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault(); // Stops browser from scrolling on arrow key, but also kills all key inputs to browser if we aren't more specific
    draw({ key: e.key }); // passing in options object
  }
}

// Clear / shake function

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('Done the shake');
      canvas.classList.remove('shake');
    },
    { once: true } // Automatically remove listener after it fires once
  );
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
