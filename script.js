var hamburger = document.getElementById("hamburger");
var dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});

