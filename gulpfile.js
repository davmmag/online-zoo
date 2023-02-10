import pkg from 'gulp';
const { src, watch, dest, series, parallel } =  pkg;
import browserSync from 'browser-sync';
import paths from './paths.js';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-dart-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import svgo from 'gulp-svgo';
import webpackStream from 'webpack-stream'
import webpack from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'

const server = () => {
  browserSync.init({
    server: {
      baseDir: 'build/',
    },
    ghostMode: { clicks: false },
    notify: false,
    online: true,
  })
}

export const html = () => {
  return src(paths.html.src)
         .pipe(htmlmin())
         .pipe(dest(paths.html.build))
         .pipe(browserSync.stream())
}

export const styles = () => {
  return src(paths.styles.src)
    // .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    // .pipe(sourcemaps.write())
    .pipe(dest(paths.styles.build))
    .pipe(browserSync.stream())
}

export const scripts = () => {
  return src(paths.js.src)
    .pipe(webpackStream({
      mode: 'production',
      performance: { hints: false },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['babel-plugin-root-import']
              }
            }
          }
        ]
      },
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: { format: { comments: false } },
            extractComments: false
          })
        ]
      },
    }, webpack)).on('error', (err) => {
      this.emit('end')
    })
    .pipe(dest(paths.js.build))
    .pipe(browserSync.stream())
}

export const images = () => {
  return src(paths.img.src)
    .pipe(imagemin())
    .pipe(dest(paths.img.build))
    .pipe(browserSync.stream())
}

export const svg = () => {
  return src(paths.svg.src)
    .pipe(dest(paths.svg.build))
    .pipe(svgo())
    .pipe(browserSync.stream())
}

const watcher = () => {
  watch(paths.html.watch, { usePolling: true }, html);
  watch(paths.styles.watch, { usePolling: true }, styles);
  watch(paths.img.watch, { usePolling: true }, images);
  watch(paths.svg.watch, { usePolling: true }, svg);
  watch(paths.js.src, { usePolling: true }, scripts);
}

export const build = series(html, parallel(styles, svg, images, scripts))
export default series(html, styles, images, svg, scripts, parallel(watcher, server));