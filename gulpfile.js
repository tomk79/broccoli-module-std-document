let gulp = require('gulp');
let plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
let concat  = require('gulp-concat');
let browserify = require("gulp-browserify");//NodeJSのコードをブラウザ向けコードに変換


// summernoteEditor フィールド を処理
gulp.task('summernoteEditor:js', function(){
	return gulp.src(["./src_gulp/fields/summernoteEditor/frontend.js"])
		.pipe(plumber())
		.pipe(browserify({}))
		.pipe(concat('frontend.js'))
		.pipe(gulp.dest( './fields/summernoteEditor/frontend/' ))
	;
});
gulp.task('summernoteEditor:css', function(){
	return gulp.src(["./src_gulp/fields/summernoteEditor/frontend.css"])
		.pipe(plumber())
		.pipe(concat('frontend.css'))
		.pipe(gulp.dest( './fields/summernoteEditor/frontend/' ))
	;
});


let _tasks = gulp.parallel(
	'summernoteEditor:js',
	'summernoteEditor:css'
);

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	return gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
