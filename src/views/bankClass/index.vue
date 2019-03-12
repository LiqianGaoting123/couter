<template>
  <div class="app-container">
    <dashboard></dashboard>
    <div>所有代理商</div>
    <div style="margin-left:15%;margin-top:10px">
    <el-input v-model="searchStr" suffix-icon="el-icon-search" style="width: 20%;margin-bottom:20px" placeholder="请输入搜索内容"></el-input>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">新增</el-button>
    <el-table
      :data="filterData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      height="450"
      border
      style="width: 95%"
    >
      <el-table-column prop="id" label="id" align="center"></el-table-column>
      <el-table-column prop="name" label="代理名" align="center"></el-table-column>
      <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
      <el-table-column prop="image" label="头像" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="sizes, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
  </div>
</template>

<script>
import { getStudentListByToken, getAllStudentList} from "@/api/student";
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "a1",
          status: "string",
          phone: '18211745670',
          image:''
        },
         {
          id: 1,
          name: "a1",
          status: "string",
          phone: '18211745670',
          image:''
        }, {
          id: 1,
          name: "a1",
          status: "string",
          phone: '18211745670',
          image:''
        } ,{
          id: 1,
          name: "a1",
          status: "string",
          phone: '18211745670',
          image:''
        }
      ],
      currentPage: 1,
      pagesize: 10,
      searchStr: "" // 新增
    };
  },
  computed: {
    filterData() {
      return this.teams.filter(item => {
        var reg = new RegExp(this.searchStr, "i");
        console.log(item.name);
        return !this.searchStr || reg.test(item.name);
      });
    }
  },
  created() {
    this.getData();
  },
  components:{
    dashboard
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    getData() {
      this.getTeams();
    },
    getTeams() {
     getAllStudentList().then(response => {
        console.log(response, "sdll");
        if (response.data.infoCod) {
          this.$message({
            message: response.data.description,
            type: "warning"

          });
        } else {
          this.teams = response.data;
        }
      });
    },
    handleChange(val) {
      console.log(val);
      if (val == 2) {
        this.getTeams();
      }
    }
  }
};
</script>

<style scoped>
.app-container{
    background: rgb(245, 246, 249);
    height: 100%;
}
</style>
