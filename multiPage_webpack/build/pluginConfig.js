const baseConfigJSON = require('../config/baseConfig.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const _ = require('./util.js')
// 配置静态资源路径和复制文件夹或者文件到指定目录下
const injectThemeAssets = baseConfigJSON.assets.injectThemeAssets || []
const copyAssets = baseConfigJSON.assets.copyAssets || []
let injectHttpsAssets = baseConfigJSON.assets.injectHttpsAssets || []
// 获取https assets
let env = process.env.NODE_ENV
const PluginsConfig = {
	plugins: []
}

//优先使用带环境的https资源
if(_.isContainArray(baseConfigJSON,'injectHttpsAssets',env)){
	injectHttpsAssets = baseConfigJSON[env].injectHttpsAssets
}
if (injectHttpsAssets.length) {
	PluginsConfig.plugins.push(new HtmlWebpackIncludeAssetsPlugin({
		assets: injectHttpsAssets,
		publicPath:false,
		append: false //是否注入到最后
	}))
}
if (injectThemeAssets.length) {
	PluginsConfig.plugins.push(new HtmlWebpackIncludeAssetsPlugin({
		assets: injectThemeAssets,
		append: false //是否注入到最后
	}))
}
if (copyAssets.length) {
	PluginsConfig.plugins.push(new CopyWebpackPlugin(copyAssets))
}

module.exports = PluginsConfig