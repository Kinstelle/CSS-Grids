// variables
var navButton  = document.querySelector('.menu button');

// toggle navigation
function toggleNavigation(e) {
    var expanded = e.target.getAttribute('aria-expanded') === 'true';
    navButton.setAttribute('aria-expanded', (!expanded).toString());
}

// toggle navigation when the menu button is cliked
navButton.addEventListener('click', toggleNavigation);