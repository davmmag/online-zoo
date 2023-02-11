import fix from './fix.js';
import Carousel from './carousel.js';
import blocksGeneration from './pets.js';
import overlay from './overlay.js';
import BurgerMenu from './burger.js';
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
fix()

const getWindowSize = () => {
  return window.matchMedia("(max-width: 770px)").matches;
}

const burgerMenu = new BurgerMenu(options);

if (document.querySelector('.js-carousel')) new Carousel();


blocksGeneration();

