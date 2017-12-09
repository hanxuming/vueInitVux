// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import store from './vuex/store'

import FastClick from 'fastclick'
/****下拉刷新 */
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.config.productionTip = false
//使用es5-promise来解析es6
require('es6-promise').polyfill()
//使用Vuex
Vue.use(Vuex)
FastClick.attach(document.body)
/******引入plugin 插件向vue中注册插件 */
// plugins
// import { DatetimePlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
// Vue.use(DevicePlugin)
// Vue.use(ToastPlugin)
// Vue.use(AlertPlugin)
// Vue.use(ConfirmPlugin)
// Vue.use(LoadingPlugin)
// Vue.use(WechatPlugin)
// Vue.use(AjaxPlugin)
// Vue.use(LocalePlugin)
// Vue.use(DatetimePlugin)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  //判断该路由是否需要登录权限
        if (localStorage.getItem("loginStatus")) {  //通过vuex state获取当前的token是否存在
            next();
        }
        else {
          console.log("参数"+to.fullPath);
            next({
                path: 'user/login'
                // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
}
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
  // ...App
})
