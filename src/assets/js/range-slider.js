const RANGE = document.querySelector('.range-input');
const SLIDER_CONTAINER = document.querySelector('.range-slider__container');
const SLIDER_ITEM_SIZE = document.querySelector('.range-slider__item').offsetWidth;
const SLIDER_SIZE = SLIDER_CONTAINER.children.length;
const SLIDER_GAP = getComputedStyle(SLIDER_CONTAINER).gap.match(/[0-9]+/)[0];
const SLIDER_FULL_WIDTH = (SLIDER_ITEM_SIZE * SLIDER_SIZE) + (SLIDER_GAP * (SLIDER_SIZE - 1));
const SLIDER_INVISIBLE_WIDTH = SLIDER_FULL_WIDTH - +SLIDER_CONTAINER.offsetWidth;
window.addEventListener('DOMContentLoaded', () => RANGE.value = 0);
RANGE.addEventListener('input', () => {
  const STEP_LENGTH = (SLIDER_INVISIBLE_WIDTH * +RANGE.value) / 100;
  SLIDER_CONTAINER.style.setProperty('--move-to', `-${STEP_LENGTH}px`);
})

export default class RangeSlider {
  constructor(range, sliderContainer) {
    this.range = range;
    this.sliderContainer = sliderContainer;
    this.sliderItemSize = this.sliderContainer.querySelector('.range-slider__item').offsetWidth;
    this.sliderSize = this.sliderContainer.children.length;
  }

  create() {
    const SLIDER_GAP = getComputedStyle(this.sliderContainer).gap.match(/[0-9]+/)[0];
    const SLIDER_FULL_WIDTH = (this.sliderItemSize * this.sliderSize) + (SLIDER_GAP * (this.sliderSize - 1));
    const SLIDER_INVISIBLE_WIDTH = SLIDER_FULL_WIDTH - +this.sliderContainer.offsetWidth;
    window.addEventListener('DOMContentLoaded', () => this.range.value = 0);
    RANGE.addEventListener('input', () => {
      const STEP_LENGTH = (SLIDER_INVISIBLE_WIDTH * +this.range.value) / 100;
      this.sliderContainer.style.setProperty('--move-to', `-${STEP_LENGTH}px`);
    })
  }
}