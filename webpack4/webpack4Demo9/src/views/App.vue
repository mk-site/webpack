<template>
	<div>
		<div>
			<div class="btn" @click="clickLi01">Home页面</div>
			<div class="btn" @click="clickLi02">About页面</div>
		</div>
		<router-view></router-view>
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
		methods:{
			clickLi02(){
				 sessionStorage.setItem("product", "101");
				this.$router.push('about')
			},
			clickLi01(){
				sessionStorage.setItem("product", "302");
				this.$router.push('home')
			}
		},
		created(){
			console.log($)
			console.log(this.$Http.url)
			console.log('created3333444')
		}
	}
</script>
<style lang="styl" scoped>
	/*h3{
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
	}*/
	img{
		width:30px;
		height:30px;
	}
	.imgTest
		width:30px;
		height:30px;
		background-repeat:no-repeat;
		background:url(../assets/logo.png);
		background-size:100% 100%;
	.btn
		display:inline-block;
		width:300px;
		height:80px;
		font-size:30px;
		color:#ff2d55;
</style>
