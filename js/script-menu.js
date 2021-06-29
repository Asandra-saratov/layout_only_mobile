let navToggle = document.querySelector('.toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('toggle--closed')) {
    navToggle.classList.remove('toggle--closed');
  } else {
    navToggle.classList.add('toggle--closed');
  }
});


