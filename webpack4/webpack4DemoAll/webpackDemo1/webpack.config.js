const resolve = require('./config/resolve.js')
const config = require('./config/index.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode: 'development',
	entry: {
		app: './src/main.js'
	},
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
		filename: '[name].js'
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
			}, { 
				test: /\.vue$/,
				loader: 'vue-loader'
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
		new HtmlWebpackPlugin({
			template: config.common.template,
			inject: true
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin({}),
		new ExtractTextPlugin("styles.css")
	]
}