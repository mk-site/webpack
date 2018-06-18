<template>
	<div>
		<h2>
			<div>h2标题<span>{{msg}}</span></div>
			<a>
				h2标题链接
			</a>
		</h2>
		<h3>
			<div>h3标题</div>
			<a>链接</a>
		</h3>
		<div>
			<img src="../assets/test.jpg">
			<div class="imgTest"></div>
		</div>
	</div>
</template>
<script>
	import $ from 'jQuery'
	export default{
		data(){
			return {
				msg:'hello webpack'
			}
		},
		created(){
			console.log($)
			console.log(this.$Http.url)
			console.log('created3333444')
		}
	}
</script>
<style lang="scss" scoped>
	h3{
		color:red;
		a{
			color:blue;
		}
	}
	.imgTest{
		width:300px;
		height:300px;
		background-repeat:no-repeat;
		background:url(../assets/logo.png);
		background-size:100% 100%;
	}
</style>
