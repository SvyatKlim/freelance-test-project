import gulp from 'gulp';
// import browserify from 'browserify';
import webpack from 'webpack-stream';
// import source from 'vinyl-source-stream';
// import buffer from 'vinyl-buffer';
// import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import config from '../config';

export const scriptsBuild = () => (
  // browserify(`${config.src.js}/main.js`, { debug: true })
  //   .transform('babelify', { presets: ['@babel/preset-env'] })
  //   .bundle()
  //   .on('error', function browserifyError(error) {
  //     console.log(error.stack);
  //     this.emit('end');
  //   })
  gulp.src(`${config.src.js}/main.js`)
    .pipe(webpack({
      // watch: true,
      mode: 'development',
      devtool: 'source-map',
      externals: {
        jquery: 'jQuery',
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: [
                ['@babel/preset-env'],
              ],
            },
          },
        ],
      },
      output: {
        filename: '[name].min.js',
      },
    }))
    // .pipe(source('main.min.js'))
    // .pipe(buffer())
    // .pipe(gulpif(config.isDev, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(config.isProd, uglify()))
    // .pipe(gulpif(config.isDev, sourcemaps.write()))
    .pipe(gulp.dest(config.dest.js))
);

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
