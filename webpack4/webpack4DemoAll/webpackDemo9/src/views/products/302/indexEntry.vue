<template>
	<div class="product302">
		<h3>302 index</h3>
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
	.product302{
		color:#ff2d55;
	}
</style>