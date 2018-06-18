const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
	resolve: {
		extensions: [".js", ".vue", ".json"]
	},
	externals: {
		jquery: 'jQuery'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'es2015'],
					 plugins : ['syntax-dynamic-import']
				}
			}
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'postcss-loader', {
				loader: 'css-loader',
				options: {
					importLoaders: 1
				}
			}]
		}, { 
			test: /\.styl$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]
		}, {
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, {
				loader: 'css-loader',
				options: {
					importLoaders: 1
				}
			}, 'postcss-loader', 'sass-loader']
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: [{
				loader: "url-loader",
				options: {
					limit: 1024 * 1,
					publicPath: '../', //不设置的话，默认取css为当前路径，加了../，就能找到外层目录
					name: 'images/[name][hash:3].[ext]' // 将图片都放入images文件夹下，[hash:3]防缓存
				}
			}]
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			use: [{
				loader: "url-loader",
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:3].[ext]' // 将字体放入fonts文件夹下
				}
			}]
		}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name]-[contenthash:5].css",
			chunkFilename: "css/[name].[id].[chunkHash:5].css"
		}),
		new VueLoaderPlugin()
	]
}