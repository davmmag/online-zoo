import fix from './fix.js';
import Carousel from './carousel.js';
import blocksGeneration from './pets.js';
import overlay from './overlay.js';
import BurgerMenu from './burger.js';
import RangeSlider from './range-slider.js';
import { followClickProgress, followInput } from './amount.js';
const isMain = document.documentElement.classList.contains('main');
const header = document.querySelector('.header');

const burger = document.querySelector('[data-burger]');
const NAV = document.querySelector('.nav');
const logo = header.querySelector('.logo');

const options = {
  nav: NAV,
  logo: logo,
  burger: burger,
}
window.addEventListener('scroll', fix);
window.addEventListener('resize', fix);
fix()

const burgerMenu = new BurgerMenu(options);

if (document.querySelector('.js-carousel')) {
  new Carousel();
  blocksGeneration();
}

if (window.matchMedia('(min-width: 600px)') && isMain) {
  new RangeSlider().create();
}

if (!isMain) {
  followClickProgress();
  followInput();
}