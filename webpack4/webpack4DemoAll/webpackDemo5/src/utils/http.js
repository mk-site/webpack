let serverUrl = ''

if(process.env.NODE_ENV == 'test'){
	serverUrl = 'http://mapi/test'	
}else if(process.env.NODE_ENV == '46'){
	serverUrl = 'http://mapi/default'
}else if(process.env.NODE_ENV == 'pre'){
	serverUrl = 'http://mapi/default'
}else{
	serverUrl = 'http://mapi/prod'
}
export default {
	url:serverUrl
}