import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import date from  '../page/demo/date.vue'
//异步加载组件
//const date = r => require.ensure([], () => r(require('../page/demo/date.vue')), 'chunkname1')
//const vuxlogin = r => require.ensure([], () => r(require('../page/vux/login')), 'chunkname1')
//用ui组件
export default new Router({
  //路由配置
  routes: [
     /***测试首页 */
    {
      path: '/',
      component: date,
      name : 'index'
     }
    ]
  })
