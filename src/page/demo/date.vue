<template>
	<div>
		<h1 style="text-align:center;">hello11 world </h1>
		<h3>vue+fetch+vux+vue-router+vuex+webpack + node</h3>
		<p class="test">
			<span class="world">test less can use?</span>
		</p>
		<p>从node服务器get请求来的数据：{{apiDate}}</p>
		<p>从node服务器post请求来的数据：{{postReturnDate}}</p>
		<router-link to="demotest">demotest</router-link>
		<a href='javascript:void(0);' @click="toDemoPage">demotest</a>
	</div>
</template>
<script type="text/javascript">
	import { Tab, TabItem } from 'vux'
	import { test,postTest } from '@/service/getData'
	export default{
		data () {
			return {
				index:0,
				apiDate: "",
				login:{
					username:"hanxuming",
					pwd : "123456"
				},
				postReturnDate:""
			}
		},
		mounted(){
			var data = {};
			test(data).then(res => {
				//alert(JSON.stringify(res));
				this.apiDate = res.data.city;
			}).catch(err => {

			})
			postTest(this.login).then(res => {
				console.log("res",JSON.stringify(res));
				this.postReturnDate = res.data.name;
			}).catch(err => {
				console.log("err",JSON.stringify(err));
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