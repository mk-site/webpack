const env = process.env.SERVER_ENV || 'production';
switch(env){
	case 'development':
		module.exports = require('./build/webpack.dev.config.js')
		break;
	case 'production':
		module.exports = require('./build/webpack.prod.config.js')
		break;
	default:
		module.exports = require('./build/webpack.dev.config.js')
}