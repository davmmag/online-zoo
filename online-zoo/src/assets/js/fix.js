const body = document.body;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const sticky = header.offsetTop;

export default () => {
  if (window.pageYOffset > sticky) {
    header.classList.add('header-f');
    body.style.paddingTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header-f');
    body.style.paddingTop = 0;
  }
};