<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px;height: 700px;">
    <div>上课记录</div>
    <div>
      <div class="active">
        <span>点名记录</span>
        <span>缺课记录</span>
      </div>

      <el-table :data="tableData" stripe style="width: 80%;margin:0 auto;border:1px solid #ccc" :cell-style="cellStyle" :header-cell-style="tableHeaderColor">
        <el-table-column prop="date" label="点名时间" width="180" background-color="#304156"></el-table-column>
        <el-table-column prop="name" label="班级名称" width="180" ></el-table-column>
        <el-table-column prop="address" label="班级老师"></el-table-column>
        <el-table-column prop="numberdate" label="上课时间" width="200"></el-table-column>
        <el-table-column prop="Classtime" label="授课/核实课时" width="180"></el-table-column>
        <el-table-column prop="money" label="课消金额"></el-table-column>
        <el-table-column prop="audit" label="审核状态"></el-table-column>
        <el-table-column prop="people" label="实到人数"></el-table-column>
        <el-table-column prop="status" label="操作"></el-table-column>
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
      tableData: [
        {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },
       {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },{
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },{
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },
       {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },
        {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },
        {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        },
          {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        }, {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        }, {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        }, {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        }, {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
        }, {
          date: "2019-01-24 15:57",
          name: "宝贝启蒙A1一班",
          address: "石学娇",
          numberdate: "2019-01-21 10:00~11:00",
          Classtime: "1->1",
          money: "112.00",
          audit: "正常",
          people:'1/6',
          status:""
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
  background: rgb(245, 246, 249);
}
.active {
  margin: 0 auto;
  width: 80%;
  background: white;
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