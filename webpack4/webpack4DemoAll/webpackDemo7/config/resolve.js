const path = require('path')
module.exports = function(str) {
	return path.join(__dirname, '..', str)
}