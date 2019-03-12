import Vue from 'vue'
import Router from 'vue-router'
import user from '@/views/user/index'
import grade from '@/views/grade/index'
import teachers from '@/views/teachers/index'
import course from '@/views/course/index'
import record from '@/views/record/index'
import student from '@/views/student/student'
import signup from '@/views/signup/index'
import home from '@/views/home/index'
import login from '@/views/home/login'
import bankClass  from '@/views/bankClass/index'
Vue.use(Router)
export default new Router({
  routes: [
   {
    path: '/user',
    name: 'user',
    component:user,
  },{
    path:'/grade',
    name:'grade',
    component:grade,
  },{
    path:'/teachers',
    name:'teachers',
    component:teachers,
  },{
    path:'/course',
    name:'course',
    component:course,
  },{
    path:'/record',
    name:'record',
    component:record,
  },{
    path:'/student',
    name:"student",
    component:student,
  },{
    path:'/signup',
    name:"signup",
    component:signup,
  },{
    path:'/',
    name:'home',
    component:home
  },{
    path:'/login',
    name:'login',
    component:login
  },{
    path:"/bankClass",
    name:'bankClass',
    component:bankClass
  }
  ]
})
