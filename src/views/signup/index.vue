<template>
  <div class="user">
    <dashboard></dashboard>
    <div class="content">
      <div class="box">
        <div class="active">
          <span>报名</span>
        </div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="ruleForm"
          class="el-inputs"
        >
          <el-form-item label="课程编号">
            <el-input v-model="ruleForm.courseId" size="small" style="width:40%"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="ruleForm.price" style="width:40%"></el-input>
          </el-form-item>
          <el-form-item label="课时数">
            <el-input v-model="ruleForm.number" style="width:40%"></el-input>
          </el-form-item>
          <el-form-item label="学生编号">
            <el-input v-model="ruleForm.studentId" style="width:40%"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">立即报名</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index";
import { enroll } from "@/api/enroll";
export default {
  data() {
    return {
      labelPosition: "right",
      ruleForm: {
        courseId: "",
        price: "",
        number: "",
        studentId: ""
      }
    };
  },
  components: {
    dashboard
  },
  methods: {
    submitForm() {
      enroll(this.courseId, this.studentId, this.price, this.number).then(
        response => {
          if (res.code !== 200) {
            this.$message({
              message: res.data.description,
              type: "warning"
            });
          } else {
            this.$message({
              message: "报名成功",
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
.user {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  display: block;
  height: 100%;
  background: rgb(245, 246, 249);
  -webkit-font-smoothing: antialiased;
}
.content {
  padding: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  margin-left: 15%;
}
.box {
  width: 95%;
  height: 500px;
  background-color: white;
  margin: 0 auto;
}
.active {
  border-bottom: 1px solid rgb(245, 246, 249);
  padding-top: 30px;
  width: 85%;
  margin: 0 auto;
}
.active span {
  margin-left: 20px;
  color: #ff8534 !important;
}
.el-inputs {
  width: 85%;
  margin: 0 auto;
  padding-top: 30px;
}
</style>