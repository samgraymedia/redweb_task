var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  clean = require('gulp-clean'),
  browserSync = require('browser-sync').create();


//SASS TASK
gulp.task('styles', () =>
  gulp.src('src/sass/style.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('src/sass/css'))
);

gulp.task('autoprefixer', () =>
  gulp.src('src/sass/css/style.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dest/css/'))
  .pipe(browserSync.stream())
);


gulp.task('serve', ['styles'], () =>

  browserSync.init({
    server: "dest"
  }));

gulp.watch('src/sass/**/*.sass', ['styles']);
gulp.watch('src/sass/css/style.css', ['autoprefixer']).on('change', browserSync.reload);
gulp.watch('dest/index.html', []).on('change', browserSync.reload);;


gulp.task('default', ['styles', 'autoprefixer', 'serve']);