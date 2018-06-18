module.exports = {
	'common':{
		template:'src/index.html',
		copy:[
			{from:'theme',to:'theme'}
		],
		includeAssets:[ //复制文件夹或者文件
			'theme/pink.css'
		]
	},
	'development':{
		isCompressCss:false,
	},
	'production':{
		isCompressCss:false,
		isSourceMap:true
	}
}