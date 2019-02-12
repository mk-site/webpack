const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBase = require('./webpack.base.config.js');
const resolve = require('./resolve.js');
const baseConfigJSON = require('../config/baseConfig.json');

module.exports = merge({},webpackBase, {
    mode: "development",
    devtool: '#source-map',
    devServer: Object.assign({},{
        contentBase: resolve("./dist"),
        compress: true,
        host: '0.0.0.0',
        useLocalIp: true,
        overlay: {
            warnings: false,
            errors: true
        },
        port: 9000
    }, baseConfigJSON.devServer || {}),
    output: {
		path: resolve('dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			}, {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader']
			}
		]
    },
    watchOptions:{
		ignored:/node_modules/
	},
    plugins: [
        new webpack.NamedModulesPlugin(),
    ]
});