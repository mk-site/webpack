import Vue from 'vue'
// import '../node_modules/vue/dist/vue.js'
import App from './views/App'
import './css/main.scss'
import Http from './utils/http.js'
Vue.prototype.$Http = Http


import router from './router/index.js'
// require('vue')
function test(a,b){
	return a+b
}

const _test = test(10,50)
console.log(_test)

new Vue({
	router,
	el:"#app",
	render:h=>h(App)
})