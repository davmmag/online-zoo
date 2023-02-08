import pkg from 'gulp';
const { src, dest } = pkg;
import paths from '../paths.js';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';

export default function images() {
  return src(paths.img.src)
         .pipe(plumber())
        //  .pipe(imagemin())
         .pipe(dest(paths.img.build));
};