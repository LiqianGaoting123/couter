<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin:30px 80px 0;height: 700px;">
    <div>老师管理</div>
    <div>
      <div style="width: 80%;margin:0 auto; background-color: white">
        <div style="display: inline-block;">
          <span style="display: inline-block;">搜索老师:</span>
          <el-input
            placeholder="请输入老师姓名/手机号"
            prefix-icon="el-icon-search"
            style="width:200px;display: inline-block;"
          ></el-input>
        </div>
        <div style="display: inline-block;">
          <span style="display: inline-block;">授课科目:</span>
          <el-input
            placeholder="选择科目"
            prefix-icon="el-icon-search"
            style="width:200px;display: inline-block;"
          ></el-input>
        </div>
      </div>

      <el-table
        :data="tableData"
        stripe
        style="width: 80%;margin:0 auto;border:1px solid #ccc"
        :cell-style="cellStyle"
        :header-cell-style="tableHeaderColor"
      >
        <el-table-column prop="address" label="老师姓名" background-color="#304156"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="subject" label="科目"></el-table-column>
        <el-table-column prop="number" label="手机号"></el-table-column>
        <el-table-column prop="calltheroll " label="上月点名率"></el-table-column>
        <el-table-column prop="Lastmonth" label="上月课时"></el-table-column>
        <el-table-column prop="operation" label="本月课时"></el-table-column>
        <el-table-column prop="already" label="已上课时"></el-table-column>
        <el-table-column label="启用状态" prop="status">
          <!-- <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
        </el-table-column>
      </el-table>
    </div>
  </div>
  </div>
</template>
<script>
import dashboard from '../dashboard/index'
export default {
  data() {
    return {
      //   value1: true,
      //   value2: true,
      tableData: [
        {
          address: "陈钧",
          gender: "男",
          subject: "美术",
          number: "15151424029",
          calltheroll: "82.81%",
          Lastmonth: "58",
          operation: "34",
          already: "281",
          status: "启用"
        },
        {
          address: "储兴红",
          gender: "女",
          subject: "美术",
          number: "15151424029",
          calltheroll: "87.50%",
          Lastmonth: "58",
          operation: "34",
          already: "264",
          status: "启用"
        },
        {
          address: "石学娇",
          gender: "女",
          subject: "美术",
          number: "15151424029",
          calltheroll: "82.81%",
          Lastmonth: "58",
          operation: "34",
          already: "281",
          status: "启用"
        }
      ]
    };
  },
  components:{
    dashboard
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0 || columnIndex == 7 || columnIndex == 8) {
        //指定列号
        return "color:darkorange";
      } else {
        return "";
      }
    },
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return " background: rgb(245, 246, 249);color: #000;font-weight: 500;";
      }
    }
  }
};
</script>
<style scoped>
.user {
  display: block;
  position: relative;
  background: rgb(245, 246, 249);
}

.date {
  color: darkorange;
}
</style>