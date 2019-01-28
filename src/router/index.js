import Vue from 'vue'
import Router from 'vue-router'
import user from '@/views/user/index'
Vue.use(Router)
export default new Router({
  routes: [
   {
    path: '/',
    name: 'user',
    component:user,
  }
  ]
})
