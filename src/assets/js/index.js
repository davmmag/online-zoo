import fix from './fix.js';
import Carousel from './carousel.js';
import blocksGeneration from './pets.js';
import overlay from './overlay.js';
import BurgerMenu from './burger.js';
import RangeSlider from './range-slider.js';
const header = document.querySelector('.header');

const burger = document.querySelector('[data-burger]');
const NAV = document.querySelector('.nav');
const logo = header.querySelector('.logo');
const RANGE = document.querySelector('.range-input');
const SLIDER_CONTAINER = document.querySelector('.range-slider__container');

const options = {
  nav: NAV,
  logo: logo,
  burger: burger,
}
window.addEventListener('scroll', fix);
fix()

const getWindowSize = () => {
  return window.matchMedia("(max-width: 770px)").matches;
}

const burgerMenu = new BurgerMenu(options);

if (document.querySelector('.js-carousel')) new Carousel();


blocksGeneration();
window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 600px)')) {
    new RangeSlider(RANGE, SLIDER_CONTAINER);
  }
})

if (window.matchMedia('(min-width: 600px)')) {
  new RangeSlider(RANGE, SLIDER_CONTAINER);
}