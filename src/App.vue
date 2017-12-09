<template>
  <div id="app">
      <transition name="slide-left">
        <router-view></router-view>
      </transition>  
  </div>
</template>
<script>
/***vuex状态管理器**/
import { mapState,mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  //提供方法
  computed: {
      ...mapState({
          showTabbar: state => state.common.showTabbar
      }),
      ...mapGetters([
          'showToast',
          'showAlert'
      ])
  }
}
</script>
<style lang="less">
/*~:webpack打包编译时指代当前项目下node_modules包里的样式文件*/
@import '~vux/src/styles/reset.less';
/*引入适配的less*/
@import './styles/rem.less';
.html-font-size(@design-font-size, @design-width);
</style>
