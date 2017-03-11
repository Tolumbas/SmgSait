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
	    	 .on('error', console.error.bind(console))
		    .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/dest/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(['./html/*.html','./public/*.html'])
    .pipe(connect.reload());
});

gulp.task('sass', ()=>{
	return gulp.src('./sass/main.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/dest/css'))
		.pipe(connect.reload());;
});

gulp.task('server',()=>{
	connect.server({
		root:"./public",
		livereload:true
	});
});

gulp.task('watch', ()=> {
  gulp.watch(['./js/*.js'], ['babeldev']);
  gulp.watch(['./sass/**/*.sass'], ['sass']);
  gulp.watch(['./html/*.html','./public/*.html'], ['html']);
});

gulp.task("default",['server','watch']);
gulp.task('build',['babeldev','sass']);
