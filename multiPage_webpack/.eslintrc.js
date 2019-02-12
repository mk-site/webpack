module.exports = {
	"root": true,  //此项是用来告诉eslint找当前配置文件不能往父级查找
	"parser": "babel-eslint", //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
	"parserOptions":{
		"sourceType":"module" ////此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指模块导入方式
	},
	"env": {
        "browser": true,
    },
	"extends": 'standard',
	"plugins":["html"], // 此项是用来提供插件的，插件名称省略了eslint-plugin-，这个配置是用来规范html的
	"rules": {
		"space-before-function-paren": 'off',
		"no-useless-escape": "off",
		"arrow-parens":0,
		"valid-jsdoc": "error",
		"no-debugger":process.env.SERVER_ENV === "production"?2:0,
		'generator-star-spacing': 0, // allow async-await
		'comma-dangle': ['error', 'never'],  // 末尾禁止使用逗号
		"quotes": ["error", "single",{
			"avoidEscape": true,
			"allowTemplateLiterals": true
		}], // 引号类型
		'keyword-spacing': 2,// 关键字后面使用一致的空格
		'spaced-comment': ['error', 'always'], // 强制在注释中 // 或 /* 使用一致的空格
		'eqeqeq': 0, // 三等号
		'no-new': 0, //new 规则 
		'no-console':0,
		'require-jsdoc':0,
		'no-multiple-empty-lines': ["error", { "max": 0, "maxEOF": 0 ,"maxBOF":0}], //设置文件的开头和末尾，是否允许空行
		'semi': ['error', 'never'] // js语句结尾不使用分号
	}
}
// eslint网址：https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
// eslint配置：https://eslint.org/docs/user-guide/configuring
// 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
// "off" -> 0 关闭规则
// "warn" -> 1 开启警告规则
// "error" -> 2 开启错误规则