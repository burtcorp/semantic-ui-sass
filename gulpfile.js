var
  gulp        = require('gulp'),
  sass        = require('gulp-sass'),
  replace     = require('gulp-replace'),
  minify      = require('gulp-minify')
;

gulp.task('sass', function () {
   gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(replace('image-url', 'url'))
    .pipe(replace('font-url', 'url'))
    .pipe(gulp.dest('../Semantic-UI-Docs/out/dist/'));
});

gulp.task('fonts', function() {
  gulp.src('./app/assets/fonts/semantic-ui/**/*.*')
  .pipe(gulp.dest('../Semantic-UI-Docs/out/dist/semantic-ui'))
});

gulp.task('images', function() {
  gulp.src('./app/assets/images/semantic-ui/*.png')
  .pipe(gulp.dest('../Semantic-UI-Docs/out/dist/semantic-ui/'))
});

gulp.task('js', function() {
  gulp.src('./app/assets/javascripts/semantic-ui/*.js')
  .pipe(gulp.dest('../Semantic-UI-Docs/out/dist/components/'))
});

gulp.task('min-js', function() {
  gulp.src('./app/assets/javascripts/semantic-ui/*.js')
  .pipe(minify({
      ext:{
          src:'.js',
          min:'.min.js'
      }
  }))
  .pipe(gulp.dest('../Semantic-UI-Docs/out/dist/components/'))
});

gulp.task('build-docs', ['sass', 'fonts', 'images', 'js', 'min-js']);

gulp.task('serve-docs', function(){
  gulp.watch('./app/assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./app/assets/javascripts/semantic-ui/*.js', ['js', 'min-js']);
});

gulp.task('default', ['build-docs', 'serve-docs']);