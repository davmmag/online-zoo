export default {
  html: {
    src: 'src/pages/*.html',
    watch: 'src/**/*.html',
    build: 'build',
  },
  styles: {
    src: 'src/assets/styles/main.scss',
    watch: 'src/**/*.*',
    build: 'build/assets/css/',
  },
  js: {
    // src: 'src/assets/js/index.js',
    src: 'src/assets/js/index.js',
    watch: 'src/**/*.js',
    build: 'build/assets/js/',
  },
  img: {
    src: 'src/assets/images/**/*.*',
    watch: 'src/assets/images/**/*.*',
    build: 'build/assets/images/',
  },
  svg: {
    src: 'src/assets/svg/*.svg',
    watch: 'src/assets/svg/*.*',
    build: 'build/assets/svg/',
  }
}