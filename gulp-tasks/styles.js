import pkg from 'gulp';
const { src, dest } = pkg;
import paths from '../paths.js';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export default function styles() {
  return src(paths.styles.src)
         .pipe(plumber())
         .pipe(sourcemaps.init())
         .pipe(sass({ outputStyle: 'compressed' }))
         .pipe(sourcemaps.write())
         .pipe(dest(paths.styles.build))
};