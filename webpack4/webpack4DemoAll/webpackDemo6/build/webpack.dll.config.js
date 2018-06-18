const path = require('path')
const webpack = require('webpack')
const package = require('../package.json')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin") //压缩js
const resolve = require('../config/resolve.js')
module.exports = {
	mode:"production",
	entry:{
		vendor:Object.keys(package.dependencies)/*.filter((item)=>{
			return item!='echarts'
		})*/
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({ //压缩js
				cache: false,
				parallel: true,
				uglifyOptions: {
					compress: {
						warnings: false,
						drop_console: true //剔除压缩代码中的console所有
					},
					output: {
						comments: false, //去除注释
						beautify: false //代码一行
					}
				}
			})
		]
	},
	output:{
		path:resolve('vendor'),
		filename:'[name]_[chunkHash:5].js',
		library:"[name]_[chunkHash:5]" //暴露出此名字的全局变量
	},
	plugins:[
		new CleanWebpackPlugin('vendor/**/*',{
			root:resolve('./') //设置清除目录的根目录
		}),
		new webpack.DllPlugin({
			context: path.join(__dirname,'./'),
			// context: __dirname,
			path:resolve('vendor/[name]-manifest.json'),
			name:"[name]" //此处不能加hash，不然打包的公共js的hash都会变化
		})
	]
}