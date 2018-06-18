<template>
	<div class='about'>
		<h3>关于<span>{{msg}}</span></h3>
	</div>
</template>
<script>
	export default{
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