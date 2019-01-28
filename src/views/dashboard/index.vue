<template> 
  <div>
    <div class="header">
      <div class="icon">
        <i class="el-icon-menu"></i>
      </div>
      <div class="name">{{name}}</div>
       <el-radio-group v-model="isCollapse" class="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
    </el-radio-group>
    <el-input v-model="input" placeholder="请输入内容" icon="el-icon-search" style="width:20vw;height:3vw;"></el-input>
    </div>
   
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
       background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="position: fixed;left:0"
      :router='true'
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">用户信息</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">教务中心</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1">学员管理</el-menu-item>
          <el-menu-item index="1-2">班级管理</el-menu-item>
          <el-menu-item index="1-3">老师管理</el-menu-item>
          <el-menu-item index="1-4">课程/收费</el-menu-item>
          <el-menu-item index="1-5">上课记录</el-menu-item>
       
        </el-menu-item-group>
      </el-submenu>
          <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">销售中心</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1">学员档案</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">财务中心</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1">学员报名</el-menu-item>
          <el-menu-item index="1-2">收据清单</el-menu-item>
       
        </el-menu-item-group>
      </el-submenu>
     <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">数据中心</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="1-1">教务数据</el-menu-item>
          <el-menu-item index="1-2">销售数据</el-menu-item>
          <el-menu-item index="1-2">财务数据</el-menu-item>
          <el-menu-item index="1-2">资金报表</el-menu-item>
       
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </div>
</template>
<script>
import {getTreePermissions} from '@/api/permissions'
export default {
  data() {
    return {
      isCollapse: false,
      name:'小麦助教',
      input: '',
    
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px;
}
.header{
  height: 3vw;
}
.icon{
  display: inline-block;
  color:darkorange;
  font-size: 20px;
  line-height: 3vw;
}
.name{
  display: inline-block;
  color:darkorange;
  font-weight: bold;
  line-height: 3vw;
}
.isCollapse{
  display: inline-block;
  line-height: 3vw;
}
</style>