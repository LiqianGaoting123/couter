<template>
  <div class="app-container">
    <dashboard></dashboard>
    <div style="margin-left:15%;margin-top:10px">
      <el-input
        v-model="searchStr"
        suffix-icon="el-icon-search"
        style="width: 20%;margin-bottom:20px"
        placeholder="搜索老师姓名/手机号"
      ></el-input>
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="onSubmit()">新增课程</el-button>
      <el-table
        :data="filterData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        height="450"
        border
        style="width: 95%"
      >
        <el-table-column prop="id" label="id" align="center"></el-table-column>
        <el-table-column prop="courseName" label="课程名称" align="center"></el-table-column>
        <el-table-column prop="image" label="头像" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.head_pic" width="40" height="40" class="head_pic">
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" align="center"></el-table-column>
          <el-table-column label="操作" align="center" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            <el-button  @click="handleDelete(scope.$index, scope.row)" type="text" size="small">移除</el-button>
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
    <el-dialog title="新增课程" :visible.sync="dialogFormVisible">
      <el-form :model="courseList">
        <el-form-item label="课程名称">
          <el-input v-model="courseList.courseName" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="courseList.price" placeholder="请输入学生人数"></el-input>
        </el-form-item>
        <el-form-item label="课时数">
          <el-input v-model="courseList.period" placeholder></el-input>
        </el-form-item>
        <el-form-item label="课时">
          <el-input v-model="courseList.comment"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-upload
            ref="upload"
            action="/upload.do"
            name="picture"
            list-type="picture-card"
            :limit="1"
            :file-list="fileList"
            :on-exceed="onExceed"
            :before-upload="beforeUpload"
            :on-preview="handlePreview"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="classAdd()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCourseListByToken, addCourse } from "@/api/course";
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      fileList: [{ name: "", url: "" }],
      dialogFormVisible: false,
      courseList:{},
      teams: [
        {
          id: 1,
          courseName: "a1",
          image: "",
          price: "50",
          priod: "80",
          comment: "艺术"
        },
         {
          id: 1,
          courseName: "a1",
          image: "",
          price: "50",
          priod: "80",
          comment: "艺术"
        },   {
          id: 1,
          courseName: "a1",
          image: "",
          price: "50",
          priod: "80",
          comment: "艺术"
        },   {
          id: 1,
          courseName: "a1",
          image: "",
          price: "50",
          priod: "80",
          comment: "艺术"
        },   {
          id: 1,
          courseName: "a1",
          image: "",
          price: "50",
          priod: "80",
          comment: "艺术"
        },
      
       
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
        console.log(item.courseName);
        return !this.searchStr || reg.test(item.courseName);
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
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    //新增班级
    onSubmit() {
      this.dialogFormVisible = true;
    },
    classAdd() {
      let studentList = this.courseList;
      let {  image,  courseName,price,priod ,comment} = studentList;
      //判断数据是否为空
      if (
        price == "" ||
        priod == "" ||
        image == "" ||
        comment == "" ||
        courseName == ""
      ) {
        this.$message.error("新增内容每一项都不准为空");
      } else {
        //每一条都不为空时才向后台发送http请求
        addCourse(this.courseList).then(
          res => {
            let { errCode, errMsg } = res.data;
            if (!errCode == 1) {
              this.$set(this.courseList, {});
              this.init(); //重新渲染数据列表
              this.dialogFormVisible = false;
            } else {
              this.$message.error(errMsg); //弹出后台返回错误
            }
          },
          response => {}
        );
      }
    },
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
      getCourseListByToken().then(response => {
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
.app-container {
  background: rgb(245, 246, 249);
  height: 100%;
}
</style>
