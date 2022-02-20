import gulp from 'gulp';
import config from './gulp/config';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { htmlBuild, htmlWatch } from './gulp/tasks/html';
// import { assetsBuild, assetsWatch } from './gulp/tasks/assets';

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    scriptsBuild,
    sassBuild,
    htmlBuild,
    // assetsBuild,
  ),
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    scriptsWatch,
    sassWatch,
    htmlWatch,
    // assetsWatch,
  ),
);
