<template>
  <div id="app">
    <login-page></login-page>
  </div>
</template>

<script>
import LoginPage from './pages/LoginPage'

export default {
  components: {
    LoginPage
  }
}
</script>

<style>
html, body {
  height: 100%;
}
a {
  color: #0DB3A6;
}
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
