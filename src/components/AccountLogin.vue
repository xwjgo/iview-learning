<template>
  <div class="account-login-comp">
    <Form :model="user">
      <Form-item>
        <Input
          v-model="user.username"
          placeholder="用户名/手机号码/邮箱"
          size="large"
        />
      </Form-item>
      <Form-item>
        <Input
          v-model="user.password"
          placeholder="密码"
          size="large"
        />
      </Form-item>
    </Form>
    <div class="login-bottom-row">
      <Checkbox v-model="user.autoLogin">下次自动登录</Checkbox>
      <a href="https://www.jiandaoyun.com/password/forget" class="forget-password">忘记密码了？</a>
    </div>
    <div class="login-button">
      <Button type="primary">登录</Button>
    </div>
    <div class="login-other-content">
      <p class="no-account">
        <span>还没有简道云账号?</span>
        <a href="https://www.jiandaoyun.com/register">立即注册</a>
      </p>
      <p class="split-line">
        <span>使用其他账号登录</span>
      </p>
      <div class="other-login-ways">
        <Icon type="chatbubbles" size="30"/>
        <Icon type="aperture" size="30"/>
        <Icon type="xbox" size="30"/>
        <Icon type="android-more-horizontal" size="30"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        user: {
          username: '',
          password: '',
          autoLogin: true
        }
      }
    }
  }
</script>
<style scoped>
.account-login-comp .login-bottom-row .forget-password {
  position: absolute;
  right: 20px;
}
.account-login-comp .ivu-form .ivu-form-item:first-child {
  margin-bottom: 15px;
}
.account-login-comp .login-button .ivu-btn-primary{
  width: 100%;
  height: 35px;
  margin: 25px 0;
  background-color: #0DB3A6;
  border-color: #0DB3A6;
  font-size: 14px;
}
.login-other-content .no-account {
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;
}
.login-other-content .split-line {
  text-align: center;
  height: 1px;
  line-height: 1px;
  border-bottom: solid 1px #D7D7D7;
  margin-bottom: 15px;
}
.login-other-content .split-line span {
  background: #fff;
  padding: 0 10px;
  color: #e0e0e0;
  font-size: 12px;
}
.login-other-content .other-login-ways {
  text-align: center;
}
.login-other-content .other-login-ways i {
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: solid 1px #ccc;
  border-radius: 50%;
  margin: 0 10px;
  color: #999;
}
.login-other-content .other-login-ways i:hover {
  color: #34AA5D;
}
</style>
