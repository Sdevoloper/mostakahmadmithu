'use strict';

// navbar variables
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle functionality
navbarToggleBtn.addEventListener('click', function () {

  navbarNav.classList.toggle('active');
  this.classList.toggle('active');

});
const scrollToTop = document.querySelector(".scrollToTop");
//When Scroll Height is greater than 400 then display scroll to top.
window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

// Scroll to top on click
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
