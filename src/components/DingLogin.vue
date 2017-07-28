<template>
  <div class="ding-login-comp">
    <div class="ding-code">
      <img src="../assets/ding-code.png">
      <p>
        <span>请使用钉钉扫描二维码登录</span>
        <a href="#">
          <Icon type="android-refresh"/>
          刷新
        </a>
      </p>
    </div>
    <div class="no-ding">
      <span>还未开通钉钉?点此</span>
      <a href="https://www.jiandaoyun.com/register">立即开通</a>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.ding-login-comp .ding-code {
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  background-color: #F9F9F9;
  text-align: center;
  padding: 35px 30px 10px 30px;
}
.ding-login-comp .ding-code p {
  margin: 10px;
}
.ding-login-comp .no-ding {
  font-size: 12px;
  text-align: center;
  color: #333;
  margin-top: 10px;
}
</style>
