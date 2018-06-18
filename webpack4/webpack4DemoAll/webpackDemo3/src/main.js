import Vue from 'vue'
// import '../node_modules/vue/dist/vue.js'

import App from './views/App.vue'

import './css/main.scss'


// require('vue')
function test(a,b){
	return a+b
}

const _test = test(10,50)
console.log(_test)

new Vue({
	el:"#app",
	render:h=>h(App)
})