/*
 * @type Module gulp|Module gulp
 * Project - Themechain
 * Author - rcweb-d
 * support - rcwebd2018@gmail.com
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// Compile Sass
gulp.task('sass', function(){
  gulp.src('app/assets/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('app/assets/dist/css'));
});

// concat all plugins js which required for template
gulp.task('concatJs', function(){
   gulp.src(
          [
            'app/assets/plugins/jquery/jquery-3.3.1.min.js',
            'app/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
            'app/assets/plugins/jquery.countdown-2.2.0/jquery.countdown.min.js',
            'app/assets/plugins/particlesjs/particles.min.js',
            'app/assets/plugins/particlesjs/app.js',
            'app/assets/plugins/owlCarousel2/owl.carousel.min.js',
            'app/assets/plugins/chartjs/chart.js',
            'app/assets/plugins/smooth-scroll/smooth-scroll.min.js',
          ])
  .pipe(concat('plugins.js'))
  .pipe(gulp.dest('app/assets/dist/js/'));
});

// concat all plugins css which required for template
gulp.task('concatCss', function(){
   gulp.src(
          [
            'app/assets/plugins/bootstrap/css/bootstrap.min.css',
            'app/assets/plugins/owlCarousel2/owl.carousel.min.css',
          ])
  .pipe(concat('plugins.css'))
  .pipe(gulp.dest('app/assets/dist/css/'));
});
//to run all task with one command "gulp"
gulp.task('default', ['concatJs', 'concatCss', 'sass']);
gulp.task('watch', function(){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
});
