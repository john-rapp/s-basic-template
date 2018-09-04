var navbar = document.querySelector('nav');
var lastScroll = 0;

window.onscroll = () => {
  var currentY = window.pageYOffset;
  if (lastScroll > currentY) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  lastScroll = currentY;
};
