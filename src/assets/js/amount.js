const VALUES = [5000, 2000, 1000, 500, 250, 100, 50, 25];
const circles = document.querySelectorAll('.progressbar__circle');
const input = document.querySelector('.pick__amount-input');


const amount = (index, block, input) => {
  if (index < -1) return;
  if (!circles) return;
  circles.forEach(item => item.classList.remove('progressbar__circle--active'));
  circles[index].classList.add('progressbar__circle--active');
  input.value = circles[index].querySelector('.progressbar__text').textContent.match(/[^$]/g).join('');
}

class Amount {
  constructor(elements, input) {
    this.values = [5000, 2000, 1000, 500, 250, 100, 50, 25];
    this.elements = elements;
    this.input = input;
  }

  run() {
    if (index < -1) return;
    if (!circles) return;
    circles.forEach(item => item.classList.remove('progressbar__circle--active'));
    circles[index].classList.add('progressbar__circle--active');
    input.value = circles[index].querySelector('.progressbar__text').textContent.match(/[^$]/g).join('');
  }
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
