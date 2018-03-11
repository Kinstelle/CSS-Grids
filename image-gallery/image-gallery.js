// variables
var overlay = document.querySelector('.overlay');
var overlayClose = document.querySelector('.close');
var overlayImage = document.querySelector('img');
var gallery = document.querySelector('.gallery');

var i, j;
var imageNb = 50;
var digits = [];

// gallery items structure
function generateHTML([col,row]) {
    return `<div class="item col${col} row${row}"><img src="images/${randomNumber(12)}.jpg" alt=""><div class="item__overlay"><button>View</button></div></div>`;
}

// generate random number to chose the image
function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

// generate arrays with col and row values
for(i = 0; i < imageNb; i++) {
    digits.push([randomNumber(4),randomNumber(4)]);
}

// generate arrays with 1 col and 1 row to fill blank spots
for(j = 0; j < (imageNb); j++) {
    digits.push([1,1]);
}

// generate gallery items (col, row, image) and put them in the html structure
var html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

// get all gallery items
var items = document.querySelectorAll('.item');

// open modal and display item image in it
function handleClick(e) {
    var src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

// close modal
function closeModal() {
    overlay.classList.remove('open');
}

// open modal when the item is clicked
items.forEach(item => item.addEventListener('click', handleClick));

// close modal when the close button is clicked
overlayClose.addEventListener('click', closeModal);