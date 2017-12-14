<template>
	<div>
		<h1 style="text-align:center;">hello world </h1>
		<h3>vue+fetch+vux+vue-router+vuex+webpack + node</h3>
		<p class="test">
			<span class="world">test less can use?</span>
		</p>
		<p>从node服务器请求来的城市数据：{{apiDate}}</p>
	</div>
</template>
<script type="text/javascript">
	import { Tab, TabItem } from 'vux'
	import { test } from '@/service/getData'
	export default{
		data () {
			return {
				index:0,
				apiDate: ""
			}
		},
		mounted(){
			var data = {};
			test(data).then(res => {
				this.apiDate = res[0].data.city;
			}).catch(err => {

			})
		},
		components : {
			
		},
		methods : {
			
		}
	}
</script>
<style type="text/css" lang="less" scoped>
	.test{
		.world{
			color:red;
		}
	}
</style>