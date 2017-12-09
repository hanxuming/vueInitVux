<template>
	<div>
		<h1 style="text-align:center;">hello world </h1>
		<h3>vue+fetch+vux+vue-router+vuex+webpack+node</h3>
		<p class="test">
			<span class="world">test less can use?</span>
		</p>
	</div>
</template>
<script type="text/javascript">
	import { Tab, TabItem } from 'vux'
	export default{
		data () {
			return {
				index:0
			}
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