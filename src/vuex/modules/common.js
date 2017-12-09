import * as types from '../types'
/**
 * App通用配置
 */
const state = {
    showToast: false,
    showSuccess: true,
	showFail: false,
    toastMsg: '操作成功',
    showTimePicker: false,
    alertMsg: '退出登录',
    showAlert: false,
    showTabbar:false,
    BankType:""
}
const actions = {
    changeBanktype({ commit }, status){
     commit(types.SET_Bank_Type, status)
    },
    /*****网络请求方法 */
    showSuccess({ commit }, status) {
        commit(types.COM_SHOW_SUCCESS, status)
    },
    showFail({ commit }, status) {
        commit(types.COM_SHOW_FAIL, status)
    },
    /****toast */
    showToast({ commit }, status) {
        commit(types.COM_SHOW_TOAST, status)
    },
   
    toastMsg({ commit }, str) {
        commit(types.COM_TOAST_MSG, str)
    },
    showAlert({ commit }, status) {
        commit(types.COM_SHOW_ALERT, status)
    },
    alertMsg({ commit }, str) {
        commit(types.COM_ALERT_MSG, str)
    },
    showTabbar({ commit }, state){
        commit(types.COM_SHOWTABBR, state)
    }
    
}
const getters = {
    showToast: state => state.showToast,
    showAlert: state => state.showAlert,
    showTabbr: state => state.showTabbar,
    GetBankType:state=>state.BankType
}
const mutations = {
    [types.SET_Bank_Type](state, status) {
        state.BankType = status
    },
    [types.COM_SHOW_TOAST](state, status) {
        state.showToast = status
    },
    [types.COM_SHOW_SUCCESS](state, status) {
        state.showSuccess = status
    },
    [types.COM_SHOW_FAIL](state, status) {
        state.showFail = status
    },
    [types.COM_TOAST_MSG](state, str) {
        state.toastMsg = str
    },
    [types.COM_SHOW_ALERT](state, status) {
        state.showAlert = status
    },
    [types.COM_ALERT_MSG](state, str) {
        state.alertMsg = str
    },
    [types.COM_SHOWTABBR](state, status) {
        state.showTabbar = status
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}