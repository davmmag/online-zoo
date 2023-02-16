const VALUES = [5000, 2000, 1000, 500, 250, 100, 50, 25];
const inputAmount = document.querySelector('.amount-input');

const removeActivated = () => {
  const activeBlock = document.querySelector('.progress__circle--active');
  if (activeBlock) activeBlock.classList.remove('progress__circle--active');
}

const followClickProgress = () => {
  const progressBlock = document.querySelector('.progress');
  progressBlock.addEventListener('click', (e) => {
    const current = e.target.closest('.progress__circle');
    const currentIndex = current.dataset.index;
    
    if (current) {
      removeActivated();
      current.classList.add('progress__circle--active');
      inputAmount.value = VALUES[currentIndex];
    }
  })
}

const followInput = () => {
  window.addEventListener('DOMContentLoaded', () => {
    inputAmount.value = '';
    inputAmount.focus();
  });
  inputAmount.addEventListener('input', () => {
    for (const number of VALUES) {
      if (number === +inputAmount.value) {
        removeActivated();
        const index = VALUES.indexOf(number);
        document.querySelector(`[data-index="${index}"]`).classList.add('progress__circle--active');
      }
    }
  })
}

export { followClickProgress, followInput };