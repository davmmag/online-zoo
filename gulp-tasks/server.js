// import paths from '../paths';
import sync from 'browser-sync';
export const browserSync = sync.create();
export default function server() {
  browserSync.init({
    server: {
      baseDir: 'build/',
    },
    ghostMode: { clicks: false },
    notify: false,
    online: true,
  })
}