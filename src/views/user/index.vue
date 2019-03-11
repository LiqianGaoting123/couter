<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header style="font-size: 12px;border:1px solid red;">
      <div class="left">
        <div class="log">
          <img style="width:100%;height:100%" src="../../assets/mxiao_201706022.png" alt>
        </div>
        <div class="title">小麦助教</div>
      </div>
      <div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </div>
    </el-header>

    
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>教务中心
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">学员管理</el-menu-item>
              <el-menu-item index="/grade">班级管理</el-menu-item>
              <el-menu-item index="/teachers">老师管理</el-menu-item>
              <el-menu-item index="/course">课程/收费</el-menu-item>
              <el-menu-item index="/record">上课记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">销售中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student">学员档案</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">财务中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/signup">学员报名</el-menu-item>
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
      </el-aside>
      <!-- <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main> -->

  </el-container>
</template>
<script>
import { getTreePermissions } from "../../api/permissions";
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
<style scoped>
.user {
  display: block;
  position: relative;
}
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
}

.el-aside {
  color: #333;
}
.left {
  width: 180px;
  border: 1px solid black;
}
.log {
  width: 48px;
  height: 48px;
}
.title {
  color: #fc9c6b;
}
</style>