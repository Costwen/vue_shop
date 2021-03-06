import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './assets/css/global.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios // 挂载
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
