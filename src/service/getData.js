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
 * 登录人员信息
 */
//暂时设置production模式development()
if(process.env.NODE_ENV=='development'){
	/*var  Login = (data) => fetch('GET', 'historyWeather/province', data);*/
	var Meeting = () => setpromise(meeting.meeting);
	var Login = () => setpromise(meeting.meeting);
}else{
	var Login = () => setpromise(meeting.meeting);
	// var  Login = (data) => fetch('GET', '/static/userinfo.json', data);
}
export{ Login,Meeting ,getPageList}