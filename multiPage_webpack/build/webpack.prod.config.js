const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ProgressPlugin = require('progress-webpack-plugin');
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const resolve = require('./resolve.js');
const baseConfigJSON = require('../config/baseConfig.json');
let env = process.env.NODE_ENV
let isSourceMap = (env && baseConfigJSON[env].isSourceMap) || false
let deleteLog = (env && baseConfigJSON[env].deleteLog)

module.exports = merge({},webpackBase, 
	isSourceMap? {devtool: '#source-map'}:{},
	{
	mode: "production",
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				cache: true,
				parallel: true,
				sourceMap: isSourceMap,
				terserOptions: {
					warnings: false,
					compress: {
						properties: false,
						drop_console: deleteLog
					},
					output: {
						comments: false,
						beautify: false
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		// splitChunks: {
		// 	name: 'vendors',
		// 	chunks: 'initial',
		// 	minSize: 0,
		// 	minChunks: 1
		// }
	},
    output: {
			path: resolve(baseConfigJSON.outputDir),
			publicPath: baseConfigJSON.publicPath,
			filename: 'js/[name].[chunkHash:5].js',
			chunkFilename: 'js/[name].[chunkHash:5].js',
    },
    module: {
		rules: [{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
		}, {
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'sass-loader']
		}]
	},
    plugins: [
        new CleanWebpackPlugin('dist/**/*', {
			root: resolve('./'),
		}),
		new ProgressPlugin(true),
		new WebpackDeepScopeAnalysisPlugin(),
        new MiniCssExtractPlugin({
			filename: "css/[name].[chunkHash:5].css",
			chunkFilename: 'css/[name].[chunkHash:5].css',
		}),
    ]
});
