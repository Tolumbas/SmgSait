const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require("gulp-concat");
const connect = require('gulp-connect');

gulp.task('babeldev',()=>{
    return gulp.src('js/*.js')
    	.pipe(sourcemaps.init())
	    	.pipe(babel({presets: ['es2015']}))
		    .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dest/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('./html/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', ()=>{
	return gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/dest/css'))
		.pipe(connect.reload());;
});

gulp.task('server',()=>{
	connect.server({
		root:"./html",
		livereload:true
	});
});

gulp.task('watch', ()=> {
  gulp.watch(['./js/*.js'], ['babeldev']);
  gulp.watch(['./sass/*.scss'], ['sass']);
  gulp.watch(['./html/*.html'], ['html']);
});

gulp.task("default",['server','watch']);
gulp.task('build',['babeldev','sass']);
