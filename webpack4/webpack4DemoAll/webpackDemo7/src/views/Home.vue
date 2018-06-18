<template>
	<div class="home">
		<h3>h1标题<span>{{msg}}</span></h3>
	</div>
</template>
<script>
	export default{
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