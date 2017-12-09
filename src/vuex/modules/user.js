import Vue from 'vue'
import * as types from '../types'
import Vuex from 'vuex'
import cookie from '../../util/cookie'
/******数据层----全是数据 */
const state = {
    // 用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    // 用户数据信息
    userData: [],
    //cooike用户 信息
    //把数据放加入cookie
    poin_user_name:cookie.get("poin_user_name_335021",{raw:false})||"",//名字
    poin_user_curRole:cookie.get("poin_user_curRole_330521",{raw:false})||"",//角色
    poin_user_curOrg:cookie.get("poin_user_curOrg_330521",{raw:false})||"",//机构
    poin_user_curDate:cookie.get("poin_user_curDate_330521",{raw:false})||"",//当前时间
	gatewaySessionID:cookie.get("gatewaySessionID",{raw:false})||""	
}
/*****处理逻辑数据ajax请求 */
const actions = {
    /***设置poin用户名 */
    setpoinUserName({ commit },res){
    cookie.set("poin_user_name_335021",res,null)
    commit(types.SET_USER_NAME,cookie.get("poin_user_name_335021",{raw:false}))
    },
    /***设置poin角色 */
    setpoinUserRole({ commit },res){
     cookie.set("poin_user_curRole_330521",res,null)
     commit(types.SET_USER_ROLE,cookie.get("poin_user_curRole_330521",{raw:false}))
    },
    /***设置poin机构 */
    setpoinUserOrg({ commit },res){
     cookie.set("poin_user_curOrg_330521",res,null)
     commit(types.SET_USER_ORG,cookie.get("poin_user_curOrg_330521",{raw:false}))
    },
    /***设置poin当前时间 */
    setpoinUserDate({ commit },res){
    cookie.set("poin_user_curDate_330521",res,null)
    commit(types.SET_USER_DATE,cookie.get("poin_user_name_335021",{raw:false}))
    },
    setgatewaySessionID({ commit },res){
     cookie.set("gatewaySessionID",res,null)
     commit(types.SET_USER_SESSIONID,cookie.get("gatewaySessionID",{raw:false}))
    },
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        //存储用户信息
        localStorage.setItem('userInfo', JSON.stringify(res))
        //存储用户登录状态
        localStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
     },
    /**
     * 设置是否显示tabbar
     */
    setShowTabbr({ commit }, res){
        commit(types.COM_SHOWTABBR, res)
    },
    /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
        api.UserInfo(id)
            .then(res => {
                //提交mutations去改变数据
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
     },
   /****
   * 用户退出登录 
    */
   setSignOut({commit}){
    localStorage.removeItem('loginStatus')//清空用户登录状态
    localStorage.removeItem('userInfo')//清空用户信息
    commit(types.SET_LOGIN_STATUS, false)//改变用户状态
    commit(types.SET_USER_INFO, {})//改变用户信息
    commit(types.COM_SHOWTABBR, false)//退出登录，隐藏tabbar
   },
   /****清除cookie用户信息 */
    setRemoveUser({commit}){
    /****清除cookie */
    cookie.remove("poin_user_name_335021",null);
    cookie.remove("poin_user_curRole_330521",null);
    cookie.remove("poin_user_curOrg_330521",null);
    cookie.remove("poin_user_curDate_330521",null);
    cookie.remove("gatewaySessionID",null);
    commit(types.SET_USER_NAME,"")
    commit(types.SET_USER_ROLE,"")
    commit(types.SET_USER_ORG,"")
    commit(types.SET_USER_DATE,"")
    commit(types.SET_USER_SESSIONID,"")
   }
}
/****获取状态 */
// function (state) {
//     return state.userInfo;
// }
/****提供获取数据的方法 */
const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
    poinusername:state=>state.poin_user_name,
    poinusercurRol:state=>state.poin_user_curRole,
    poinusercurOrg:state=>state.poin_user_curOrg,
    poinusercurDate:state=>state.poin_user_curDate,
	gatewaySessionID:state=>state.gatewaySessionID,
}
/******mutations提交数据** */
const mutations = {
    /*****commit接收action中的数据 */
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },
    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },
    [types.GET_USER_DATA](state, res) {
        state.userData = res
    },
    /******cookie信息 */
     [types.SET_USER_NAME](state, res) {
        state.poin_user_name = res
    },
     [types.SET_USER_ROLE](state, res) {
        state.poin_user_curRole = res
    },
     [types.SET_USER_ORG](state, res) {
        state.poin_user_curOrg = res
    },
    [types.SET_USER_DATE](state, res) {
        state.poin_user_curDate = res
    },
    [types.SET_USER_SESSIONID](state, res) {
        state.gatewaySessionID= res
    }
    
}
Vue.use(Vuex)
/****导出模块 */
export default{
    state,
    actions,
    getters,
    mutations
}