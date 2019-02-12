const _ = new Object()
_.type = function(obj) {
	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}
_.isArray = function(list) {
	return _.type(list) === 'Array'
}
// 在指定环境下对象包含属性
_.isContainArray = function(obj,attr,env){
	if(env){
		if(obj[env] && this.isArray(obj[env][attr]) && obj[env][attr].length>0){
			return true
		}
	}else{
		if(obj[attr] && this.isArray(obj[attr]) && obj[attr].length>0){
			return true
		}
	}
	return false
}
module.exports = _