<template>
  <div class="login">
    <logo-comp></logo-comp>
    <Card class="login-body">
      <Tabs value="accountLogin">
        <Tab-pane label="账号登录" name="accountLogin">
          <account-login-comp></account-login-comp>
        </Tab-pane>
        <Tab-pane label="钉钉登录" name="dingLogin">
          <ding-login-comp></ding-login-comp>
        </Tab-pane>
        <Tab-pane label="企业微信登录" name="wechatLogin">
          <wechat-login-comp></wechat-login-comp>
        </Tab-pane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
  import LogoComp from '../components/Logo'
  import AccountLoginComp from '../components/AccountLogin'
  import DingLoginComp from '../components/DingLogin'
  import WechatLoginComp from '../components/WechatLogin'
  export default {
    components: {
      LogoComp,
      AccountLoginComp,
      DingLoginComp,
      WechatLoginComp
    }
  }
</script>

<style>
  .login .ivu-card-body {
    max-width: 400px;
  }
  .login-body .ivu-tabs-nav .ivu-tabs-ink-bar {
    background-color: #0DB3A6;
  }
  .login-body .ivu-tabs-nav .ivu-tabs-tab {
    text-align: center;
    width: 33%;
    padding-bottom: 15px;
  }
  .login-body .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #0DB3A6;
  }
  .login-body .ivu-tabs-nav .ivu-tabs-tab-active {
    color: #333;
  }
  .login-body .ivu-tabs-tabpane {
    padding: 10px 20px;
  }
</style>

