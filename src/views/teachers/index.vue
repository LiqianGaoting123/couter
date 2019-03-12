<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin:30px 80px 0;height: 700px;">
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
          <el-table-column prop="id" label="id" background-color="#304156"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="image " label="老师头像"></el-table-column>
          <el-table-column label="启用状态" prop="status">
            <!-- <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index";
import {getTeacherListByToken,} from '@/api/teacher'
export default {
  data() {
    return {
      //   value1: true,
      //   value2: true,
      tableData: [
      {
        id:'1',
        name:'张三',
        phone:'18211746920',
        image:''
      }
      ]
    };
  },
  components: {
    dashboard
  },
  created() {
    this.getData()
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
    },
    getData(){
      this.getTeachers()
    },
    getTeachers() {
      getTeacherListByToken({}).then(response => {
        console.log(response, "sdll");
        if (response.code != 200) {
          this.$message({
            message: response.data.description,
            type: "warning"
          });
        } else {
          this.tableData = response.data;
        }
      });
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