<template>
 <div class="indexWrapper">
    <div class="main">
        <div class="logo"></div>
        <div class="form" name="login">
          <div class="formTd">
            <img class="inputIcon imgClass" src="../../assets/images/ic_name.png" />
            <input class="inputCom inputText" type="text" autocomplete="off" placeholder="请输入手机号" name="tel">
          </div>
          <div class="formTd formTdGap">
            <img class="inputIcon imgClass" src="../../assets/images/ic_pwd.png" />
            <input class="inputCom" type="password" placeholder="请输入密码" name="password">
          </div>
          <button class="loginBtn"  @click="_login" >登录</button>
          <!--vux组件引用实例-->
          <!-- 
          <p class="goTo">
            <check-icon :value.sync="demo1">记住密码</check-icon>
            <check-icon :value.sync="demo2">自动登录</check-icon>
          </p>
          <nav-title title="标题"></nav-title>
          -->
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
//1.引入
import CheckIcon from 'vux/src/components/check-icon'
import navTitle from '../../components/title.vue'
import cookie from '../../util/cookie'
import {Login} from '../../service/getData'
export default {
  //2.注册
  components: {
    CheckIcon,  
    navTitle
  },
  data () {
    return {
      demo1: false,
      demo2: false,
      password: '',
      username: ''
    }
  },
  methods:{
     //状态用户信息管理
     ...mapActions({changeBanktype:'changeBanktype',
     setUserInfo: 'setUserInfo',setShowTabbr:'setShowTabbr',setpoinUserName:'setpoinUserName',setpoinUserRole:'setpoinUserRole',setpoinUserOrg:'setpoinUserOrg',setpoinUserDate:'setpoinUserDate',setgatewaySessionID:'setgatewaySessionID'}),
     _login(){
       cookie.set("1111","中文cookie");
          const  data = {
              key:"b7358ab3c3930b8c35749fe425215198"
          }
        this.changeBanktype("AEB");
        //Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
         Login(data).then(res=>{
              var self=this; 
              setTimeout(function(){
                   self.$router.replace('/')
              }, 1000);
          }).catch(error => {
              console.log(error);
          })
     }
  }
}
</script>

<style lang="less" scoped>
/******************引入less部分*****************/
@import '../../styles/rem';
/******************图标字体*****************/
[class^="i-"]{
    font-family: "icon"!important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    moz-osx-font-smoothing: grayscale;
}
/******************最外层包裹*****************/
.indexWrapper{
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    width:100%;
    height:100%;
    max-width:750px;
    margin:0 auto;
    display:block;
    background:white;
}
/******************logo部分*****************/
.main .logo{
   height:80px;
   width:80%;
   margin:0 auto;
   margin-top:18%;
   background:url(../../assets/images/alogo.png) no-repeat;
   background-size:contain; 
   background-position:center;
}
/******************表单部分*****************/
.form{
  .px2rem(margin-top,80px);
}
.formTd{
  width:70%;
  margin-left:15%;
  border-bottom:1px solid  #EDEEF2;
  .inputIcon{
    .px2rem(width,40px);
    .px2rem(height,40px);
  }
  .inputCom{
    width:82%;
    .px2rem(height,80px);
    outline: none;
    .px2rem(padding-left,20px);
    .px2rem(font-size,36px);
  }
}
 .formTdGap{
    .px2rem(margin-top,20px);
  }
/******************按钮部分*****************/
.loginBtn{
  display:block;
  margin:0 auto;
  .px2rem(margin-top,80px);
  width: 51%;
  .px2rem(line-height,80px);
  .px2rem(border-radius,33px);
  background: #F00001;
  color:white;
  letter-spacing: 2px;
  .px2rem(font-size,32px);
}
/******************登录按钮变色*****************/
.weui-icon-circle:before {
    line-height: 24px;
    content: "\EA01";
    /**设置图标字体大小*/
    font-size:1.1rem;
}
</style>

