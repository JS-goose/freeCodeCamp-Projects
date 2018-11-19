const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");

// Task to minify css using package cleanCSS
gulp.task("minify-css", () => {
  // Folder with files to minify
  return (
    gulp
      .src("./css/**/*.css")
      .pipe(cleanCSS())
      //This method declares where minified files will be placed
      .pipe(gulp.dest("minified"))
  );
});
// We create a 'default' task that will run when we run `gulp` in the project
gulp.task("watch", function(evt) {
  // We use `gulp.watch` for Gulp to expect changes in the files to run again
  gulp.watch("./css/**/*.css", function(evt) {
    gulp.task("minify-css");
  });
});

gulp.task('default', gulp.parallel('minify-css', 'watch'));