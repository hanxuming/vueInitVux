<template>
	<div>
		<h1 style="text-align:center;">hello11 world </h1>
		<h3>vue+fetch+vux+vue-router+vuex+webpack + node</h3>
		<p class="test">
			<span class="world">test less can use?</span>
		</p>
		<p>从node服务器请求来的数据：{{apiDate}}</p>
		<router-link to="demotest">demotest</router-link>
		<a href='javascript:void(0);' @click="toDemoPage">demotest</a>
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
				//alert(JSON.stringify(res));
				this.apiDate = res.data.city;
			}).catch(err => {

			})
		},
		components : {
			
		},
		methods : {
			toDemoPage () {
				this.$router.push("/demotest");
			}
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