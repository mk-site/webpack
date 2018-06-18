//autoprefixer配置兼容性:https://github.com/browserslist/browserslist#config-file
//  postcss-cssnext包含autoprefixer插件
/*package.json配置
"browserslist": [
    "> 1%", "last 2 versions", "Firefox 56", "Opera 12.1","chrome 42","safari 7"
  ]
 */
module.exports = {
	plugins: {
		'postcss-nested': {}, //支持嵌套 cssnext的嵌套
		'postcss-cssnext': {}, //postcss的编译
		'cssnano': {} //压缩、去除写法不好的代码，浏览器支持更好的代码
	}
}