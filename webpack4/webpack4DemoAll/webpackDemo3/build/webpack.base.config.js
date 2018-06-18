const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	module: {
		rules: [{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'es2015']
					}
				}
			},{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins:[
		new VueLoaderPlugin()
	]
}