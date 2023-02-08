import pkg from 'gulp';
const { src, dest } = pkg;
import paths from '../paths.js';
import plumber from 'gulp-plumber';
import { browserSync } from './server.js';

export default function html() {
  return src(paths.html.src)
        //  .pipe(plumber())
         .pipe(dest(paths.html.build))
};