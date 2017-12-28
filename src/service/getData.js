import fetch from '../config/fetch'
import * as meeting from './tempdata/meeting'

import "fetch-ie8"
import "fetch-detector"
/**
 * 模拟json数据
 */
const setpromise = data => {
	return new Promise((resolve, reject) => {
		resolve(data)
	})
}
/**
 * 请求超时的处理
 * 
 */
function _fetch(fetch, timeout) {
	return Promise.race([
		fetch,
		new Promise(function (resolve, reject) {
			setTimeout(() => reject(new Error('request timeout')), timeout);
		})
	]);
}
/**
 * 登录人员信息
 */
//暂时设置production模式development()
if(process.env.NODE_ENV=='development'){
	/*var  Login = (data) => fetch('GET', 'historyWeather/province', data);*/
	var  Login = (data) => _fetch(fetch('GET', 'historyWeather/province', data),10000);
	var Meeting = () => setpromise(meeting.meeting);
	var Login = () => setpromise(meeting.meeting);
	var test = (data) => fetch('GET','users/getUserInfo?id=2',data);
}else{
	var Login = () => setpromise(meeting.meeting);
	// var  Login = (data) => fetch('GET', '/static/userinfo.json', data);
}
export{ Login,Meeting ,getPageList,test}