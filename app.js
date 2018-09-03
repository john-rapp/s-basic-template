const navbar = document.querySelector('nav');
let lastScroll = 0;

window.onscroll = () => {
  let currentY = window.pageYOffset;
  if (lastScroll > currentY) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  lastScroll = currentY;
};
