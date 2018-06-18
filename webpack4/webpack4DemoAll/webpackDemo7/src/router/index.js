
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'


import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '../views/Home.vue');
const About = () => import(/* webpackChunkName: 'about' */ '../views/About.vue');
const routes = [
	{ path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
]


// export default routes

Vue.use(Router)
export default new Router({
    routes
})