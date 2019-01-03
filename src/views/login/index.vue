<template>
  <div class="login-view">
    <div class="input-wrapper">
      <div class="input-item">
        <div class="input-icon-wrapper">
          <img class="input-icon" :src="require('@pic/login/weixin.png')">
        </div>
        <input type='tel' placeholder="请输入手机号码">
      </div>
      <div class="input-item">
        <div class="input-icon-wrapper">
          <img class="input-icon" :src="require('@pic/login/pwd.png')">
        </div>
        <input type='password' placeholder="请输入登录密码">
      </div>
      <div class="login-btn">登录</div>
      <div class="login-bttom">
        <div class="bot-item">忘记密码</div>
        <div class="bot-item" @click="goToRegister">快速注册</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('register')
    }
  }
}
</script>

<style scope lang='less'>
  .login-view{
    height: 100vh;
    width: 100%;
    background: url(~@pic/login/login-bg.png) no-repeat center;
    background-size: 100%;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }
  .input-wrapper{
    width: 710px;
    height: 600px;
    margin-top:388px;
    background: url(~@pic/login/input-bg.png) no-repeat center;
    background-size: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 86px;
    box-sizing: border-box;
    .input-item{
      width:618px;
      height:84px;
      display: flex;
      background:#F5F5F5;
      border-radius:41px;
      margin-bottom: 30px;
      .input-icon-wrapper{
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        .input-icon{
          &:nth-child(1) {
            width: 40px;
            height: 34px;
          }
        }
      }
      input{
        flex: 1;
        margin-right: 40px;
        background: transparent;
        outline: none;
        border: none;
      }
    }
    .login-btn{
      width:618px;
      height:97px;
      display: flex;
      justify-content: center;
      align-items: center;
      background:linear-gradient(180deg,rgba(255,134,117,1) 0%,rgba(250,92,93,1) 100%);
      border-radius:48px;
      margin-top: 30px;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:21px;
    }
    .login-bttom{
      display: flex;
      margin-top: 45px;
      width:540px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .bot-item{
        font-size:30px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(101,101,101,1);
        &:last-child{
          text-decoration:underline;
          color: #FC6360;
        }
      }
    }
  }
</style>
