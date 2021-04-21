const gulp = require('gulp'),
  sass = require('gulp-sass'),
  path = require('path'),
  moduleImporter  = require('sass-module-importer'),
  webserver = require('gulp-webserver'),
  autoprefixer = require('gulp-autoprefixer'),
  rollup = require('rollup-stream'),
  babel = require('gulp-babel'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream');

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

const config = {
  paths: {
    scssSource: './_source/scss/',
    cssDest: './_app/css',
    jsSource: './_source/js/',
    jsDest: './_app/js',
  },
  root: ['./_app']
};

gulp.task('styles', () => {
  return gulp.src(path.join(config.paths.scssSource, 'main.scss'))
  .pipe(sass({importer: moduleImporter(), outputStyle: 'compressed'})
  .on('error', swallowError))
  .pipe(gulp.dest(config.paths.cssDest));
});

gulp.task('scripts', () => {
  return rollup({
      input: path.join(config.paths.jsSource, 'main.js'),
      format: 'es',
    })
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(babel({
      presets: [
        'minify',
        [
          '@babel/preset-env',
          {
            "targets": "> 1%, not dead",
          }
        ],
      ]
    }))
    .pipe(gulp.dest(config.paths.jsDest));
});

gulp.task('serve', () => {
  gulp.src(config.root)
  .pipe(webserver({
    fallback: './_app/index.html',
    livereload: true,
    open: true
  }))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 5 versions', 'Firefox >= 20', 'iOS >=7'],
    cascade: false
  }))
  gulp.watch(path.join(config.paths.scssSource, '**/*.scss'), gulp.series(['styles']));
  gulp.watch(path.join(config.paths.jsSource, '**/*.js'), gulp.series(['scripts']));
});

gulp.task('default', gulp.series('styles', 'scripts', 'serve'));