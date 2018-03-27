// requireing the toolkits needed
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minify = require('gulp-minify'),
  browserSync = require('browser-sync').create();


//SCSS TASK
gulp.task('styles', () =>
  //grads the source off the scss
  gulp.src('src/scss/style.scss')
  //checks for errors
  .pipe(sass().on('error', sass.logError))
  //turns the scss into css ready for autoprefixer to run
  .pipe(gulp.dest('src/scss/css'))
);
// autoprefixer task
gulp.task('autoprefixer', () =>
  //grads the source off the css
  gulp.src('src/scss/css/style.css')
  //runs autoprefixer to the 2 latest browser verisons
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  //places the prefixed css into the correct folder for use in app.
  .pipe(gulp.dest('dest/css/'))
  //lets browser sync to refresh the broswer
  .pipe(browserSync.stream())
);
//compress task
gulp.task('compress', () =>
  //gets the source of all the Javascript jiles
  gulp.src('src/js/**/*.js')
  //minifies the JS files and adds the .min.js to the file extention
  .pipe(minify({
    ext: {
      min: '.min.js'
    },
    //ignore any already minified files
    exclude: ['tasks'],
    ignoreFiles: ['.combo.js', '-min.js']
  }))
  //places the files in the correct folder for use in app.
  .pipe(gulp.dest('dest/js'))
);


//serve task for broswer sync

gulp.task('serve', ['styles'], () =>
  //tells browser sync where to server from
  browserSync.init({
    server: "dest"
  }));
//tells gulp to watch for any changes in these files and funs the tasks Associated with them
gulp.watch('src/scss/**/*.scss', ['styles']);
gulp.watch('src/scss/css/style.css', ['autoprefixer']).on('change', browserSync.reload);
gulp.watch('dest/index.html', []).on('change', browserSync.reload);
gulp.watch('src/js/**/*.js', ['compress']);

//what tasks to run when gulp is first called.
gulp.task('default', ['styles', 'autoprefixer', 'compress', 'serve']);