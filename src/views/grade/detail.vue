<template>
  <div class="app-container">
    <dashboard></dashboard>
    <div style="margin-left:15%;margin-top:10px;height:100%;">
      <div class="box">
        <el-menu
          :default-active="activeIndex"
          background-color="#fff"
          text-color="#fff"
          active-text-color="#ffd04b"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1">班级学员</el-menu-item>
        </el-menu>
        <div style="margin-bottom:12px">
          <el-button type="primary" @click="onSubmit()">添加学员</el-button>
          <el-button>调至其他班</el-button>
          <el-button>移除本班</el-button>
        </div>
        <el-table
          ref="multipleTable"
          :data="teams"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="courseName" label="课程名称"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">调至其他班</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog title="添加学员" :visible.sync="dialogFormVisible">
      <el-table
        ref="multipleTable"
        :data="teams"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="courseName" label="课程名称"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ToClass()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getClassListByToken, addClass } from "@/api/class";
import { addStudentToClass } from "@/api/student";
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      fileList: [{ name: "", url: "" }],
      dialogFormVisible: false,
      activeIndex: "1",
      activeIndex2: "1",
      teams: [
        {
          name: "王小虎",
          sex: "男",
          phone: "18211746920",
          courseName: "创意艺术"
        },
        {
          name: "王小虎",
          sex: "女",
          phone: "18211746920",
          courseName: "素描"
        }
      ]
    };
  },
  components: {
    dashboard
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      this.dialogFormVisible = true;
    },
    ToClass() {
          let studentList = this.teams;
      let { name,sex,phone,courseName } = studentList;
      //判断数据是否为空
      if (name=="" || sex == "" || phone=="" || courseName == "") {
        this.$message.error("新增内容每一项都不准为空");
      } else {
        //每一条都不为空时才向后台发送http请求
        addStudentToClass(this.teams).then(
          res => {
            let { errCode, errMsg } = res.data;
            if (!errCode == 1) {
              this.$set(this.teams, {});
              this.init(); //重新渲染数据列表
              this.dialogFormVisible = false;
            } else {
              this.$message.error(errMsg); //弹出后台返回错误
            }
          },
          response => {}
        );
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
.el-menu-demo {
  margin-bottom: 10px;
}
.box {
  width: 90%;
  margin: 0 auto;
  background: #fff;
}
</style>
