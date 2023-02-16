const animalsArr = [
  {
    'image': './assets/images/panda.jpg',
    'name': 'giant Pandas',
    'place': 'Native to Southwest China',
  },
  {
    'image': './assets/images/eagles.jpg',
    'name': 'Eagles',
    'place': 'Native to South America',
  },
  {
    'image': './assets/images/gorilla.jpg',
    'name': 'Gorillas',
    'place': 'Native to Congo',
  },
  {
    'image': './assets/images/sloth.jpg',
    'name': 'Two-toed Sloth',
    'place': 'Mesoamerica, South America',
  },
  {
    'image': './assets/images/cheetahs.jpg',
    'name': 'cheetahs',
    'place': 'Native to Africa',
  },
  {
    'image': './assets/images/penguins.jpg',
    'name': 'Penguins',
    'place': 'Native to Antarctica',
  },
  {
    'image': './assets/images/polar_bear.jpg',
    'name': 'Polar Bear',
    'place': 'Northern Hemisphere',
  },
  {
    'image': './assets/images/elephant.jpg',
    'name': 'African elephants',
    'place': 'Several Africa',
  },
  {
    'image': './assets/images/arctic_fox.jpg',
    'name': 'Arctic Fox',
    'place': 'Northern Hemisphere',
  },
  {
    'image': './assets/images/caribou.jpg',
    'name': 'Caribou',
    'place': 'Northern Hemisphere',
  },
  {
    'image': './assets/images/harp_seal.jpg',
    'name': 'Harp Seal',
    'place': 'Native to Africa',
  },
  {
    'image': './assets/images/sun_bear.jpg',
    'name': 'Sun bear',
    'place': 'Southeast Asia',
  },
];

const TO_LEFT_SLIDE = document.querySelector('.carousel__item-list-left');
const TO_RIGHT_SLIDE = document.querySelector('.carousel__item-list-right');

const shuffle = (array) => {
  let tmp, current, top = array.length;
  if (top) while (--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

const createElement = (selector = 'div', name = '', text, src) => {
  const ELEMENT = document.createElement(selector);
  ELEMENT.classList.add(...name.split(' '));
  if (selector === 'img') {
    ELEMENT.src = src;
    ELEMENT.alt = text;
  }
  if (text && selector !== 'img') ELEMENT.textContent = text;
  return ELEMENT;
}

const createBlock = (index) => {
  const { name, image, place } = animalsArr[index];
  const ITEM = createElement('div', 'carousel__elem grid-item');
  const IMG = createElement('img', 'grid-item__img',name, image);
  const TITLE = createElement('h4', 'grid-item__title',name);
  const TEXT = createElement('p', 'grid-item__text', place);
  const ITEM_HEAD = createElement('div', 'grid-item__content');
  ITEM_HEAD.append(TITLE, TEXT)
  ITEM.append(IMG, ITEM_HEAD);
  return ITEM;
}

const blocksGeneration = (pages = 2, length = 12) => {
  const indexes = shuffle(Array.from({ length: length }, (v, i) => i));
  TO_LEFT_SLIDE.innerHTML = '';
  TO_RIGHT_SLIDE.innerHTML = '';
  for (let i = 0; i < length; i++) {
    const indexOfAnimal = indexes[i];
    if (i < 6) TO_LEFT_SLIDE.append(createBlock(indexOfAnimal));
    else TO_RIGHT_SLIDE.append(createBlock(indexOfAnimal));
  }
}

export default blocksGeneration;