import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
