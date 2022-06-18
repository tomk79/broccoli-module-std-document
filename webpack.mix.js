const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.webpackConfig({
		module: {
			rules:[
				{
					test: /\.txt$/i,
					use: ['raw-loader'],
				},
				{
					test:/\.twig$/,
					use:['twig-loader']
				}
			]
		},
		resolve: {
			fallback: {
				"fs": false,
				"path": false,
				"crypto": false,
				"stream": false,
			}
		}
	})


	// --------------------------------------
	// fields: cssMarginPadding
	.js('./src_gulp/fields/cssMarginPadding/cssMarginPadding.js', './fields/cssMarginPadding/frontend/')
	.sass('src_gulp/fields/cssMarginPadding/cssMarginPadding.css.scss', './fields/cssMarginPadding/frontend/cssMarginPadding.css')

;
