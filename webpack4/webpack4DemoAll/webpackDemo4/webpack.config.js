const resolve = require('./config/resolve.js')
const baseConfig = require('./build/webpack.base.config.js')
const config = require('./config/index.js')
const merge = require('webpack-merge')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = merge({}, baseConfig, config.production.isSourceMap ? {
	devtool: '#source-map'
} : {}, {
	mode: 'production',
	entry: {
		app: resolve('./src/main.js')
	},
	output: {
		path: resolve('dist'),
		filename: 'js/[name].[chunkHash:5].js'
	},
	module: {
		/*rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: 'css-loader',
					options: {
						// If you are having trouble with urls not resolving add this setting.
						// See https://github.com/webpack-contrib/css-loader#url
						url: false,
						minimize: config.production.isCompressCss,
						sourceMap:  config.production.isSourceMap
					}
				}]
			})
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: 'css-loader',
					options: {
						// If you are having trouble with urls not resolving add this setting.
						// See https://github.com/webpack-contrib/css-loader#url
						url: false,
						minimize: config.production.isCompressCss,
						sourceMap:  config.production.isSourceMap
					}
				}, {
					loader: 'sass-loader',
					options: {
						sourceMap:  config.production.isSourceMap
					}
				}]
			})
		}]*/
	},
	plugins: [
		new CleanWebpackPlugin('dist/**/*'),
		new HtmlWebpackPlugin({
			template: config.common.template,
			inject: true
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: config.common.includeAssets,
			append: true //是否注入到默认的前面，可多写几个
		}),
		new CopyWebpackPlugin(config.common.copy)/*,
		new ExtractTextPlugin("css/[name].[hash:5].css")*/
	]
})