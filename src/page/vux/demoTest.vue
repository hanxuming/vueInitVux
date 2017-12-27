<template>
	<div>
        {{name}}
    <!-- v-bind 缩写 ：主要用于属性绑定 -->
    <group title="姓名">
        <x-input title="用户名" placeholder="请输入用户名" :max="4" :disabled="false"  placeholder-align="left" @on-focus="onFocus">
            <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
        </x-input>
    </group>
	</div>
</template>
<script type="text/javascript">
	import { Group,XInput } from 'vux'
	export default{
		data () {
			return {
                index:0,
                name : '光大'
			}
		},
		mounted () {
            alert("mounted");
		},
		components : {
            Group,
            XInput
		},
		methods : {
			onFocus () {
                console.log("onfouces")
            }
		}
	}
</script>
<style type="text/css" scoped>
	
</style>