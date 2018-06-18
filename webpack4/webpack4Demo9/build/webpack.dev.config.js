const resolve = require('../config/resolve.js')
const baseConfig = require('./webpack.base.config.js')
const config = require('../config/index.js')
const merge = require('webpack-merge')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const webpack = require('webpack')
module.exports = merge({}, baseConfig, {
	mode: 'development',
	entry: {
		app: resolve('./src/main.js')
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 0,
			minChunks: 1
		}
	},
	devtool: '#source-map',
	output: {
		path: resolve('dist'),
		filename: './js/[name].js',
		chunkFilename: './js/[name].[chunkHash:5].js'
	},
	module: {
		rules: []
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: config.common.template,
			inject: true
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: config.common.includeAssets,
			append: true //是否注入到默认的前面，可多写几个
		}),
		new CopyWebpackPlugin(config.common.copy),
		new webpack.HotModuleReplacementPlugin({})
		/*,
				new ExtractTextPlugin("css/styles.css")*/
	]
})