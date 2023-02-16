const modal = document.querySelector('.modal');
const testimonials = document.querySelector('.testimonials');
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
    close.onclick = function () {
      modal.style.display = 'none';
      overlay();
      body.style.overflow = 'visible';
    }
  }

  modal.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      body.style.overflow = 'visible';
      overlay();
    }
  });
}


class Modal {
  constructor() {
    
  }
}