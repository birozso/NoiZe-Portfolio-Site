$(document).ready(function () {
  /*
  * Open the menu when the hamburger menu pic is clicked.
  */
  var menu = document.querySelector('#menu_button');
  var main = document.querySelector('main');
  var navi = document.querySelector('.navigation');

  menu.addEventListener('click', function(e) {
    hamburger_menu.classList.toggle('open');
    e.stopPropagation();
  });
  main.addEventListener('click', function() {
    hamburger_menu.classList.remove('open');
  });
});