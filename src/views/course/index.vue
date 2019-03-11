<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px;height: 700px;">
    <div>班级管理</div>
    <div>
      <div class="active">
        <span>课程管理</span>
        <span>收费项管理</span>
        <span>套餐管理</span>
      </div>

      <el-table :data="tableData"  stripe style="width: 80%;margin:0 auto;" :cell-style="cellStyle">
        <el-table-column prop="name" label="课程名称" width="180"></el-table-column>
        <el-table-column prop="charge" label='收费方式'></el-table-column>
        <el-table-column prop="price" label='价格'></el-table-column>
        <el-table-column prop="type" label='类型'></el-table-column>
        <el-table-column prop="students" label='在读学员'></el-table-column>
        <el-table-column prop="status" label='启用状态'></el-table-column>
      </el-table>
    </div>
    </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      tableData: [
       {
           name:'创意描述',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },
         {
           name:'动漫',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },  {
           name:'大师预科班',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },  {
           name:'创意美术',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },  {
           name:'素描',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },  {
           name:'色彩基础',
           charge:'按课时收费',
           price:'120元/课时',
           type:'一对多',
           students:'5',
           status:'启用'
       },
      ]
    };
  },
components:{
dashboard
},
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0 || columnIndex == 3 || columnIndex == 5 || columnIndex == 6) {
        //指定列号
        return "color:darkorange";
      } else {
        return "";
      }
    },
    course(){
      this.$axios.get('/api/getCourseListByToken').then(res=>{
        console.log(res)
      })
    }
  },
  created() {
    this.course()
  },
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