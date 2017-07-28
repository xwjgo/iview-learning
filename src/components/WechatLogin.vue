<template>
  <div class="wechat-login-comp">
    <a href="#" class="admin-login">
      <Card>
        <Icon type="ios-personadd-outline" size="60"/>
        <span>管理员登录</span>
      </Card>
    </a>
    <a href="#" class="staff-login">
      <Card>
        <Icon type="ios-person-outline" size="60"/>
        <span>普通员工登录</span>
      </Card>
    </a>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.wechat-login-comp a {
  display: inline-block;
  height: 290px;
  width: 160px;
  text-align: center;
  margin: 0 1px;
}
.wechat-login-comp a i {
  display: block;
  padding: 80px 0 50px 0;
}
.wechat-login-comp a span {
  display: block;
  font-size: 18px;
  padding-bottom: 70px;
}
.wechat-login-comp .admin-login:hover {
  color: #0DB3A6;
}
.wechat-login-comp .staff-login {
  color: #F0AD4E;
}
.wechat-login-comp .staff-login:hover {
  color: #F0AD4E;
}
</style>
