<template>
	<div class='about'>
		<h3>关于<span>{{msg}}</span></h3>
		<am-index></am-index>
	</div>
</template>
<script>
	// import IndexEntry from './products/product101/indexEntry.vue'
	export default{
		components:{
			// 'am-index':require('./'+sessionStorage.getItem('product')+'Entry.js')
			// 'am-index':require('./products/'+sessionStorage.getItem('product')+'/indexEntry.vue')
			'am-index':() => import('./products/'+sessionStorage.getItem('product')+'/indexEntry.vue')
		},
		data(){
			return {
				msg:'about page'
			}
		},
		created(){
			console.log('about')
		}
	}
</script>
<style lang="scss" scoped>
	.about{
		color:blue;
	}
</style>