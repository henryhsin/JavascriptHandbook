const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

gulp.task("default", function(){
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"]).pipe(eslint()).pipe(eslint.format());
    //node來源
    gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));
    //瀏覽器來源
    gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
