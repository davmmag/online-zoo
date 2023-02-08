import pkg from 'gulp';
const { watch } = pkg;
import paths from '../paths.js';
import html from './html.js';
import styles from './styles.js';
import images from './images.js';
import browserSync from 'browser-sync';



export default function watcher() {
  watch(paths.html.watch).on('change', () => {
  });
  // watch(paths.styles.watch, styles);
  // watch(paths.img.watch, images);
}