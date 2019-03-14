// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import store from './store/index'
//配置全局的axios默认值（可选）
import axios from 'axios'
axios.defaults.baseURL= 'http://192.168.80.152:8088'
axios.defaults.headers.post['Content-Type'] = "application/json"
axios.defaults.withCredentials = true
axios.defaults.headers.common['Authorization'] = store.state.token
Vue.prototype.$axios = axios


Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
