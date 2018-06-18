<template>
	<div class="product101">
		<h3>101index</h3>
	</div>
</template>
<script>
	import config from '../../../config/index.js'
	// const config = ()=>import('../../../config/index.js')
	export default{
		data(){
			return {
				msg:'home page'
			}
		},
		created(){
			config.init()
			console.log('index 101')
		}
	}
</script>
<style lang="scss" scoped>
	.product101{
		color:#ff2d55;
	}
</style>