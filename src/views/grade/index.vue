<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px;height: 700px;">
      <div>
        <div class="active">
          <span>班课</span>
          <span>一对一</span>
        </div>

        <el-table :data="tableData" stripe style="width: 80%;margin:0 auto" :cell-style="cellStyle">
          <el-table-column prop="date" label="班级名称" width="180" background-color="#304156"></el-table-column>
          <el-table-column prop="name" label="班级课程" width="180"></el-table-column>
          <el-table-column prop="address" label="班级老师"></el-table-column>
          <el-table-column prop="number" label="人数/容量"></el-table-column>
          <el-table-column prop="Classtime" label="已上/排课课次"></el-table-column>
          <el-table-column prop="hour" label="已授课时"></el-table-column>
          <el-table-column prop="operation" label="操作"></el-table-column>
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
          date: "天才创意B1五班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "1/8",
          Classtime: "0/0",
          hour: "0",
          operation: "学员管理|点名|结业"
        },
        {
          date: "C1三班",
          name: "大师预科班",
          address: "陈钧",
          number: "1/12",
          Classtime: "4/4",
          hour: "4",
          operation: "学员管理|点名|结业"
        },
        {
          date: "宝贝启蒙A1二班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "3/0",
          Classtime: "7/7",
          hour: "7",
          operation: "学员管理|点名|结业"
        },
        {
          date: "大师预科四班",
          name: "大师预科班",
          address: "陈钧",
          number: "3/0",
          Classtime: "12/12",
          hour: "12",
          operation: "学员管理|点名|结业"
        },
        {
          date: "C1四班",
          name: "大师预科班",
          address: "陈钧",
          number: "1/12",
          Classtime: "14/14",
          hour: "14",
          operation: "学员管理|点名|结业"
        },
        {
          date: "色彩",
          name: "色彩基础",
          address: "陈钧",
          number: "1/0",
          Classtime: "14/14",
          hour: "14",
          operation: "学员管理|点名|结业"
        },
        {
          date: "天才创意B1四班",
          name: "创意美素",
          address: "石学娇，储新红",
          number: "6/0",
          Classtime: "16/16",
          hour: "17",
          operation: "学员管理|点名|结业"
        },
        {
          date: "b2补课班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "0/0",
          Classtime: "6/6",
          hour: "6",
          operation: "学员管理|点名|结业"
        },
        {
          date: "B1补课班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "0/0",
          Classtime: "5/5",
          hour: "5",
          operation: "学员管理|点名|结业"
        },
        {
          date: "A2补课班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "2/0",
          Classtime: "15/15",
          hour: "15",
          operation: "学员管理|点名|结业"
        },
        {
          date: "天才创意B1五班",
          name: "创意美术",
          address: "石学娇，储新红",
          number: "1/8",
          Classtime: "0/0",
          hour: "0",
          operation: "学员管理|点名|结业"
        }
      ]
    };
  },
  components: {
    dashboard
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