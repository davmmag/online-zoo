import overlay from './overlay.js';

class BurgerMenu {
  constructor(options) {
    this.options = options;
    this.addListeners();
  }

  addListeners() {
    const NAV_LINKS = this.options.nav.querySelectorAll('.nav__link');
    NAV_LINKS.forEach(link => link.addEventListener('click', () => this.start()));
    this.options.burger.addEventListener('click', () => this.start());
  }

  start() {
    const { nav, logo, burger } = this.options;
    const flag = nav.classList.contains('nav--visible');
    if (flag === true) {
      nav.classList.remove('nav--visible');
      overlay();
      logo.classList.remove('logo--active')
      burger.classList.remove('burger--active');
    } else {
      nav.classList.add('nav--visible');
      overlay();
      setTimeout(() => logo.classList.add('logo--active'), 900);
      burger.classList.add('burger--active');
    }
  }
}

export default BurgerMenu;