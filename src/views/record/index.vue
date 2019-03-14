<template>
  <div class="app-container">
    <dashboard></dashboard>
    <div style="margin-left:15%;margin-top:10px">
      <el-input
        v-model="searchStr"
        suffix-icon="el-icon-search"
        style="width: 20%;margin-bottom:20px"
        placeholder="请输入搜索内容"
      ></el-input>
      <el-button type="primary">查询</el-button>
      <el-table
        :data="filterData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        height="450"
        border
        style="width: 95%"
      >
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="studentName" label="学生名称" align="center"></el-table-column>
        <el-table-column prop="image" label="头像" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.head_pic" width="40" height="40" class="head_pic">
          </template>
        </el-table-column>
        <el-table-column prop="startDate" label="请假开始时间" align="center"></el-table-column>
        <el-table-column prop="endDate" label="请假结束时间" align="center"></el-table-column>
        <el-table-column prop="applyTime" label="提出请假时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">申请</el-button>
          </template>
        </el-table-column>
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
import { getAbsentListByToken, applyAbsence } from "@/api/leave";
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      fileList: [{ name: "", url: "" }],
      dialogFormVisible: false,
      teams: [
        {
          id: 1,
          studentName: "a1",
          image: "",
          startDate: "2018-01-15",
          endDate: "2018-01-16",
          applyTime: "2018-01-15"
        },
        {
          id: 1,
          studentName: "51",
          image: "",
          startDate: "2018-01-15",
          endDate: "2018-01-16",
          applyTime: "2018-01-15"
        },
        {
          id: 1,
          studentName: "a1",
          image: "",
          startDate: "2018-01-15",
          endDate: "2018-01-16",
          applyTime: "2018-01-15"
        },
        {
          id: 1,
          studentName: "a1",
          image: "",
          startDate: "2018-01-15",
          endDate: "2018-01-16",
          applyTime: "2018-01-15"
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
        console.log(item.studentName);
        return !this.searchStr || reg.test(item.studentName);
      });
    }
  },
  created() {
    this.getData();
  },
  components: {
    dashboard
  },

  methods: {
    //文件上传成功的钩子函数
    handleSuccess(res, file) {
      this.$message({
        type: "info",
        message: "图片上传成功",
        duration: 6000
      });
      if (file.response.success) {
        this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
      }
    },
    //删除文件之前的钩子函数
    handleRemove(file, fileList) {
      this.$message({
        type: "info",
        message: "已删除原有图片",
        duration: 6000
      });
    },
    //点击列表中已上传的文件事的钩子函数
    handlePreview(file) {},
    //上传的文件个数超出设定时触发的函数
    onExceed(files, fileList) {
      this.$message({
        type: "info",
        message: "最多只能上传一个图片",
        duration: 6000
      });
    },
    //文件上传前的前的钩子函数
    //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isGIF = file.type === "image/gif";
      const isPNG = file.type === "image/png";
      const isBMP = file.type === "image/bmp";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isGIF && !isPNG && !isBMP) {
        this.$message.error("上传图片必须是JPG/GIF/PNG/BMP 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
    },
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
      getAbsentListByToken().then(response => {
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
    },
    handleClick(row) {
      console.log(row);
      applyAbsence(this.classId, this.startDate, this.endDate).then(
        response => {
          if (response.data.infoCode) {
            this.$message({
              message: response.data.description,
              type: "warning"
            });
          } else {
            this.$message({
              message: "申请成功",
              type: "success"
            });
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.app-container {
  background: rgb(245, 246, 249);
  height: 100%;
}
</style>
