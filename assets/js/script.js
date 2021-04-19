let hamburger = document.querySelector('.icon-hamburger')
let nav = document.querySelector('.start nav')

hamburger.addEventListener('click', function() {
  nav.classList.toggle('show-menu')
});