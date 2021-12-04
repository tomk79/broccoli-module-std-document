let gulp = require('gulp');
let webpack = require('webpack');
let webpackStream = require('webpack-stream');
let sass = require('gulp-sass');//CSSコンパイラ
let autoprefixer = require("gulp-autoprefixer");//CSSにベンダープレフィックスを付与してくれる
let minifyCss = require('gulp-minify-css');//CSSファイルの圧縮ツール
let plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
let rename = require("gulp-rename");//ファイル名の置き換えを行う


// --------------------------------------
// Custom Field "cssMarginPadding" を処理
gulp.task('cssMarginPadding:js', function(){
	return webpackStream({
		mode: 'production',
		entry: "./src_gulp/fields/cssMarginPadding/cssMarginPadding.js",
		devtool: 'source-map',
		output: {
			filename: "cssMarginPadding.js"
		},
		module:{
			rules:[
				{
					test: /\.twig$/,
					use: ['twig-loader']
				},
				{
					test:/\.html$/,
					use:['html-loader']
				}
			]
		},
		externals: {
			fs: 'commonjs fs',
		},
	}, webpack)
		.pipe(plumber())
		.pipe(gulp.dest( './fields/cssMarginPadding/frontend/' ))
	;
});
gulp.task('cssMarginPadding:css', function(){
	return gulp.src("src_gulp/fields/cssMarginPadding/**/*.css.scss")
		.pipe(plumber())
		.pipe(sass({
			"sourceComments": false
		}))
		.pipe(autoprefixer())
		.pipe(rename({
			extname: '',
		}))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulp.dest( './fields/cssMarginPadding/frontend/' ))
	;
});


// --------------------------------------
// Custom Field "slider" を処理
gulp.task('slider:js', function(){
	return webpackStream({
		mode: 'production',
		entry: "./src_gulp/fields/slider/slider.js",
		devtool: 'source-map',
		output: {
			filename: "slider.js"
		},
		module:{
			rules:[
				{
					test: /\.twig$/,
					use: ['twig-loader']
				},
				{
					test:/\.html$/,
					use:['html-loader']
				}
			]
		},
		externals: {
			fs: 'commonjs fs',
		},
	}, webpack)
		.pipe(plumber())
		.pipe(gulp.dest( './fields/slider/frontend/' ))
	;
});
gulp.task('slider:css', function(){
	return gulp.src("src_gulp/fields/slider/**/*.css.scss")
		.pipe(plumber())
		.pipe(sass({
			"sourceComments": false
		}))
		.pipe(autoprefixer())
		.pipe(rename({
			extname: '',
		}))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
			extname: '.css'
		}))
		.pipe(gulp.dest( './fields/slider/frontend/' ))
	;
});


let _tasks = gulp.parallel(
	'cssMarginPadding:js',
	'cssMarginPadding:css',
	'slider:js',
	'slider:css'
);

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	return gulp.watch(["src_gulp/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);
