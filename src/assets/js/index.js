
import Carousel from "./carousel.js";
import blocksGeneration from "./pets.js";
const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.logo__menu');
const overlayBlock = document.querySelector('.overlay');
const header = document.querySelector('.header');
const sticky = header.offsetTop;
const headerHeight = header.offsetHeight;
const body = document.body;
const testimonials = document.querySelector('.testimonials');
const popupBlocks = document.querySelectorAll('.testimonials__item');
const mainBlock = document.querySelector('.testimonials__content');
const windowInnerWidth = document.documentElement.clientWidth;
const dialog = document.querySelector('.dialog');

const overlay = () => {
  if (overlayBlock.classList.contains('active')) overlayBlock.classList.remove('active');
  else {
    overlayBlock.classList.add('active');
  }
}

const burgerRun = () => {
  const burgerFunc = (flag) => {
    if (flag) {
      nav.classList.add('nav--visible');
      overlay();
      logo.classList.add('logo__menu--active');
      burger.classList.add('burger--active');
    } else {
      nav.classList.remove('nav--visible');
      overlay();
      logo.classList.remove('logo__menu--active');
      burger.classList.remove('burger--active');
    }
  }

  burger.addEventListener('click', () => {
    if (nav.classList.contains('nav--visible')) burgerFunc(false);
    else { burgerFunc(true); }
  });

  for (let el of navLinks) {
    el.addEventListener('click', () => burgerFunc(false));
  }
};

const headerFix = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('header-f');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header-f');
    body.style.paddingTop = 0;
  }
};
window.addEventListener('scroll', headerFix)

headerFix();

window.addEventListener('load', () => burgerRun());

const modal = document.querySelector('.modal');
if (modal) {
  document.querySelectorAll('.testimonials__item').forEach(item => {
    item.addEventListener('click', () => {
      modal.querySelector('.modal__img').src = item.querySelector('.testimonials__item-img').src;
      modal.querySelector('.modal__title').textContent = item.querySelector('.testimonials__item-title').textContent;
      modal.querySelector('.modal__place').textContent = item.querySelector('.testimonials__item-place').textContent;
      modal.style.display = 'block';
      modal.style.top = `${mainBlock.offsetHeight / 2}`;
      body.style.overflow = 'hidden';
      overlay()
    })
  });
const close = document.querySelector('.cross');
if (close) {
close.onclick = function() {
  modal.style.display = "none";
  overlay();
  body.style.overflow = 'visible';
}
}
modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    body.style.overflow = 'visible';
    overlay();
  }
});
}

const values = [5000, 2000, 1000, 500, 250, 100, 50, 25];
const circles = document.querySelectorAll('.progressbar__circle');
const input = document.querySelector('.pick__amount-input');
const amount = (index) => {
  if (index < -1) return;
  if (!circles) return;
  circles.forEach(item => item.classList.remove('progressbar__circle--active'));
  circles[index].classList.add('progressbar__circle--active');
  input.value = circles[index].querySelector('.progressbar__text').textContent.match(/[^$]/g).join('');
}

if (input) {
  input.addEventListener('input', () => {
  if (typeof +input.value === 'number') {
    if (values.indexOf(+input.value) !== -1) {
      amount(values.indexOf(+input.value));
    }
  } 
})
}

if (circles) {
  circles.forEach(circle => {
  circle.addEventListener('click', (e) => {
    amount(circle.dataset.index);
  })
  });

  window.addEventListener('load', () => {
    amount(circles.length - 3);
  })
}

if (document.querySelector('.js-carousel')) new Carousel();
blocksGeneration();