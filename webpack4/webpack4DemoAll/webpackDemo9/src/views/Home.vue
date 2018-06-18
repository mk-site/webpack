<template>
	<div class="home">
		<h3>h1标题<span>{{msg}}</span></h3>
		<am-index></am-index>
	</div>
</template>
<script>

	export default{
		components:{
			'am-index':() => import('./products/'+sessionStorage.getItem('product')+'/indexEntry.vue')
		},
		data(){
			return {
				msg:'home page'
			}
		},
		created(){
			console.log('home')
		}
	}
</script>
<style lang="scss" scoped>
	.home{
		color:pink;
	}
</style>