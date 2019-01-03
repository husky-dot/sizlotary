<template>
  <div class="register-view">
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
        <input type='password' placeholder="请设置登录密码">
      </div>
      <div class="input-code-item">
        <div class="input-code-wrapper">
          <div class="input-icon-wrapper">
            <img class="input-icon" :src="require('@pic/login/code.png')">
          </div>
          <input type='password' placeholder="请输入图片验证码">
        </div>
        <div class="code-wrapper"></div>
      </div>
      <div class="input-item">
        <div class="input-icon-wrapper">
          <img class="input-icon" :src="require('@pic/login/person.png')">
        </div>
        <input type='password' placeholder="请填写推荐人">
      </div>
      <div class="login-btn">立即注册</div>
      <div class="bottom-tips">
        已有账号？<span class="dark">立即登录</span>
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
  components: {
  }
}
</script>

<style scope lang='less'>
  .register-view{
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
    height: 790px;
    margin-top:388px;
    background: url(~@pic/login/reg-bg.png) no-repeat center;
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
      margin-top: 20px;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:21px;
    }
  }
  .input-code-item{
    display: flex;
    width:618px;
    height:84px;
    margin-bottom: 30px;
    .input-code-wrapper{
      width:392px;
      height:84px;
      background:rgba(245,245,245,1);
      border-radius:41px;
      display: flex;
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
      input {
        width: 250px;
        border: none;
        background: transparent;
      }
    }
    .code-wrapper{
      flex: 1;
      background: yellow;
      margin-left: 30px;
    }
  }
  .bottom-tips{
    font-size:30px;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(153,153,153,1);
    line-height:66px;
    margin-top: 20px;
    .dark{
      color: #FC6360;
      text-decoration: underline;
    }
  }
</style>
