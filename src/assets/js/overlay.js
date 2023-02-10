const BLOCK_OVERLAY = document.querySelector('.overlay');

export default function overlay() {
  if (BLOCK_OVERLAY.classList.contains('active')) {
    BLOCK_OVERLAY.classList.remove('active');
  }
  else {
    BLOCK_OVERLAY.classList.add('active');
  }
}