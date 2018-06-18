"use strict"
<template>
	<div>
		<h2>
			<div>h2标题<span>{{msg}}</span></div>
			<a>
				h2标题链接33336666
			</a>
		</h2>
		<h3>
			<div>h3标题</div>
			<a>链接</a>
		</h3>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'hello webpack22'
			}
		},
		created(){
			console.log('created')
		}
	}
</script>
<style lang="scss" scoped>
	h3{
		color:pink;
		a{
			color:blue;
		}
	}
</style>
