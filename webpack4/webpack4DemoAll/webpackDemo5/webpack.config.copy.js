const resolve = require('./config/resolve.js')
const config = require('./config/index.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: {
		app: './src/main.js'
	},
	// entry:[
	// 	'webpack-hot-middleware/client',
	// 	'./src/main.js'
	// ],
	devServer:{
		contentBase:path.join(__dirname,'./'),
		// compress:true, //是否开启gzip压缩
		host:'0.0.0.0', //可通过localhost 或者本机ip来访问地址
		hot:true,
		inline:true,
		quiet:true,
		// open:true,
		port:9000 // 端口号
	},
	devtool:'#source-map',
	output: {
		path: resolve('dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'es2015']
					}
				}
			}, { //ExtractTextPlugin插件： https://github.com/webpack-contrib/extract-text-webpack-plugin
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							fallback: "style-loader", //失败了使用style-loader
							use: ['css-loader']
						}),
						scss: ExtractTextPlugin.extract({
							fallback: "style-loader",
							use: [{
								loader: 'css-loader',
								options: {
									// If you are having trouble with urls not resolving add this setting.
									// See https://github.com/webpack-contrib/css-loader#url
									url: false,
									minimize: true,
									sourceMap: true
								}
							}, {
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}]
						})
					}
				}
			}, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader',
						options: {
							// If you are having trouble with urls not resolving add this setting.
							// See https://github.com/webpack-contrib/css-loader#url
							url: false,
							minimize: true,
							sourceMap: true
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
							minimize: true,
							sourceMap: true
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}]
				})
			}

		]
	},
	plugins: [
		new CleanWebpackPlugin('dist/**/*'),
		new HtmlWebpackPlugin({
			template: config.common.template,
			inject: true
		}),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: config.common.includeAssets,
    		append: true  //是否注入到默认的前面，可多写几个
		}),
		new CopyWebpackPlugin(config.common.copy),
		new webpack.HotModuleReplacementPlugin({}),
		new ExtractTextPlugin("css/styles.css")
	]
}