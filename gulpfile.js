// Variable setup
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var plumber = require('gulp-plumber');

gulp.task('browser-sync', ['index-refresh', 'sass-refresh', 'js-refresh'], function() {
  browserSync({
    server: {
      baseDir: './src'
    }
  });
});

gulp.task('index-refresh', function() {
  return gulp.src('./src/index.html')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('sass-refresh', function(){
  return gulp.src('./src/css/main.scss')
  .pipe(plumber())
  .pipe(sass({
    includePaths: ['css', 'scss', 'sass'],
    indentedSyntax: true,
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade : true}))
  .pipe(browserSync.reload({stream : true}))
  .pipe(gulp.dest('./src/css'));
});

gulp.task('js-refresh', function() {
  return gulp.src('./src/scripts/*.js')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function() {
  gulp.watch('./src/index.html', ['index-refresh']);
  gulp.watch('./src/css/**', ['sass-refresh']);
  gulp.watch('./src/scripts/*.js', ['js-refresh']);
});

gulp.task('default', ['browser-sync', 'watch']);
