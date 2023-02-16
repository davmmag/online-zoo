export default class RangeSlider {
  constructor(range = document.querySelector('.range-input'), sliderContainer = document.querySelector('.range-slider__container')) {
    this.range = range;
    this.sliderContainer = sliderContainer;
    this.sliderItemSize = this.sliderContainer.querySelector('.range-slider__item').offsetWidth || null;
    this.sliderSize = this.sliderContainer.children.length;
  }

  create() {
    const SLIDER_GAP = getComputedStyle(this.sliderContainer).gap.match(/[0-9]+/)[0];
    const SLIDER_FULL_WIDTH = (this.sliderItemSize * this.sliderSize) + (SLIDER_GAP * (this.sliderSize - 1));
    const SLIDER_INVISIBLE_WIDTH = SLIDER_FULL_WIDTH - +this.sliderContainer.offsetWidth;
    window.addEventListener('DOMContentLoaded', () => this.range.value = 0);
    this.range.addEventListener('input', () => {
      const STEP_LENGTH = (SLIDER_INVISIBLE_WIDTH * +this.range.value) / 100;
      this.sliderContainer.style.setProperty('--move-to', `-${STEP_LENGTH}px`);
    })
  }
}