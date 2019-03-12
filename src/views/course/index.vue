<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px;height: 700px;">
      <!-- <div>班级管理</div> -->
      <div>
        <div class="active">
          <span>课程管理</span>
          <span>收费项管理</span>
          <span>套餐管理</span>
        </div>

        <el-table
          :data="tableData"
          stripe
          style="width: 80%;margin:0 auto;"
          :cell-style="cellStyle"
        >
          <el-table-column prop="id" label="课程对象" width="180"></el-table-column>
          <el-table-column prop="courseName" label="课程名称" width="180"></el-table-column>
          <el-table-column prop="image" label="课程头像"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="operation" label="操作"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index";
import { getCourseListByToken, addCourse } from "@/api/course";
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          courseName: "按课时收费",
          image:'',
          price: "120元/课时",
        },
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
      if (
        columnIndex == 0 ||
        columnIndex == 3 ||
        columnIndex == 5 ||
        columnIndex == 6
      ) {
        //指定列号
        return "color:darkorange";
      } else {
        return "";
      }
    },
    getData(){
      this.getCourse();
    },

    getCourse() {
      getCourseListByToken({}).then(response => {
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
  background: rgb(245, 246, 249);
}
.active {
  margin: 0 auto;
  width: 80%;
  background: white;
  border-bottom: 1px solid #cccccc;
}
.active > span:nth-child(2) {
  margin-left: 20px;
}
.active > span:hover {
  color: darkorange;
  border-bottom: 1px solid darkorange;
}
.date {
  color: darkorange;
}
</style>