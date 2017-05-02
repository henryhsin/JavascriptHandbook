const gulp = require('gulp');
const babel = require('gulp-babel');
gulp.task('default', function(){
    //node來源
    gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
    //瀏覽器來源
    gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
