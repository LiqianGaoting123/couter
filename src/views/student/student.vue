<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px; height: 700px;">
    <div>学员档案</div>
    <div>
      <div style="width:80%;margin:0 auto; background-color: white;">
        <div style="display: inline-block;">
          <span style="display: inline-block;">搜索学员:</span>
          <el-input
            placeholder="请输入学员姓名/手机号"
            prefix-icon="el-icon-search"
            style="width:200px;display: inline-block;"
          ></el-input>
        </div>
        <div style="display: inline-block;">
          <span style="display: inline-block;">跟进状态:</span>
          <el-input
            placeholder="请选择跟进状态"
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
        <el-table-column prop="address" label="学员姓名" background-color="#304156"></el-table-column>
        <el-table-column prop="number" label="手机号"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column prop="end" label="最后一次跟进"></el-table-column>
        <el-table-column prop="date" label="下次跟进时间"></el-table-column>   
        <el-table-column prop="tag" label="标签"></el-table-column>                     
        <el-table-column label="跟进状态" prop='status'> </el-table-column>
        <el-table-column prop="operation" label="操作"></el-table-column>        

          <!-- <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
        
      </el-table>
    </div>
  </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index"
export default {
  data() {
    return {
      tableData: [
        
      ]
    };
  },
  components:{
dashboard
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex == 0 ||
        columnIndex == 7 ||
        columnIndex == 8
      ) {
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