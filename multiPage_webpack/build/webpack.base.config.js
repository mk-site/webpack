const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'); 
const StyleLintPlugin = require('stylelint-webpack-plugin');
const resolve = require('./resolve.js');
const merge = require('webpack-merge');
const pluginConfig = require('./pluginConfig.js');
const baseConfigJSON = require('../config/baseConfig.json')
 
const fs = require('fs');
const jsEntrys = {}; // 所有开发入口文件

const pagesPath = resolve('src/pages');
function getEntry(dir, subDir='') {
    var dirArr = fs.readdirSync(dir);
    // console.log(dirArr, subDir);
    dirArr.map((item, index) => {
        let fd = dir + '/' + item;
        if(fs.statSync(fd).isDirectory()) { // 是目录
            // console.log(item, '是目录', fd)
            getEntry(fd, subDir?subDir + '-' + item : item);
        } else { // 是文件
            if (/.entry.js$/.test(item)) {
                // console.log(item)
                var inner = item.replace('.entry.js', '')
                jsEntrys[subDir + '-' + item.replace('.entry.js', '')] = dir + '/' + item;
            }
        }
    })
}
getEntry(pagesPath)
// console.log('==========', jsEntrys);
let SERVER_ENV = process.env.SERVER_ENV;
let NODE_ENV = process.env.NODE_ENV;
const getHtmlConfig = function(name, chunks) {
	let tempName = name.split('-');
	let filename = '';
	if (tempName.length > 1 && tempName[0] === tempName[1]) {
		filename = tempName.slice(1).join('-');
	} else {
		filename = name;
	}
	// console.log(filename);
	// console.log(filename.replace(/-/g,'/'))
    return {
        template: `src/pages/${name.replace(/-/g,'/')}.html`,
        filename: `${filename}.html`,
		inject: true,
		chunks: ['runtime', name],
		meta: (baseConfigJSON[NODE_ENV] && baseConfigJSON[NODE_ENV].meta ) || [],
		minify: SERVER_ENV==='production'?{
			minifyCSS: true,
			minifyJS: true,
			removeComments: true,
			removeAttributeQuotes: true,
			removeEmptyAttributes: true,
			collapseWhitespace: true
		}:{}
    }
}

const getHtmlPlugins = function () {
    var htmlArr = [];
    for(var key in jsEntrys) {
		htmlArr.push(new HtmlWebpackPlugin(getHtmlConfig(key)))
    }
    return htmlArr;
};
let eslintArray = [];
if(baseConfigJSON.eslint){
	let fileArr = []
	for(let i=0;i<baseConfigJSON.lintDir.length;i++){
		fileArr.push(resolve(baseConfigJSON.lintDir[i]))
	}
	eslintArray.push({
        test: /\.(js)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: fileArr, //[resolve('src'),resolve('lib')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          quiet: true
        }
    })
}
const stylelintPlugins = []
if(baseConfigJSON.stylelint){
	let fileArr = []
	for(let i=0;i<baseConfigJSON.lintDir.length;i++){
		fileArr.push(baseConfigJSON.lintDir[i] + '/**/*.vue')
		fileArr.push(baseConfigJSON.lintDir[i] + '/**/*.s?(a|c)ss')
	}
	stylelintPlugins.push(new StyleLintPlugin({
		files:fileArr   //配置要加stylelint目录 [baseConfigJSON.viewDir + '/**/*.vue', baseConfigJSON.viewDir + '/**/*.s?(a|c)ss','lib/**/*.vue','lib/**/*.s?(a|c)ss'] 
	}))
}

module.exports = merge({},{
	module:{
		rules:eslintArray
	},
	plugins:stylelintPlugins
}, {
    entry: jsEntrys,
    optimization: {
        runtimeChunk: 'single'
    },
    externals: baseConfigJSON.externals,
    resolve: {
		extensions: [".js",".vue", ".json"],
		alias: {
			'@': resolve('./src')
		}
    },
    module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
					plugins: ['syntax-dynamic-import', '@babel/plugin-transform-runtime']
				}
			},
			exclude: /node_modules/,
			include: [resolve('src')]
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			use: [{
				loader: "url-loader",
				options: {
					publicPath: '../',
					limit: 1024 * 5,
					name: 'static/assets/images/[name][hash:3].[ext]'
				}
			}]
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			use: [{
				loader: "url-loader",
				options: {
					publicPath: '../',
					limit: 10000,
					name: 'fonts/[name].[hash:3].[ext]' // 将字体放入fonts文件夹下
				}
			}]
		}]
	},
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'prod')
		}),
		...getHtmlPlugins()
    ]
}, pluginConfig);