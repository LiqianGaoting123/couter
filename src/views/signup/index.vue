<template>
  <div class="user">
    <dashboard></dashboard>
    <div style="margin-left:80px;margin-top:30px;height: 700px;">
      <div>班级管理</div>
      <div class="box">
        <div class="active">
          <span>报名</span>
          <span>套餐收款码</span>
        </div>
        <div>
          <el-steps :active="active" align-center finish-status="success" style="margin-top:20px">
            <el-step title="学员信息"></el-step>
            <el-step title="购买项目"></el-step>
            <el-step title="费用结算"></el-step>
          </el-steps>
          <div class="box-border">
            <span style="display: inline-block;">姓名:</span>
            <el-input placeholder="请输入姓名" size="mini" style="width:200px;display: inline-block;"></el-input>
            <div
              style="border:1px solid darkorange;width:150px;height:25px;border-radius:3px;display: inline-block;"
            >
              <span
                style="line-height: 25px;display:block;text-align: center;color: darkorange;"
              >选择学员</span>
            </div>
          </div>
          <div style="margin-top: 15px;" class="box-border">
            <span style="display: inline-block;">手机号:</span>
            <el-select
              v-model="select"
              style="width:80px;display: inline-block;"
              size="mini"
              slot="prepend"
              placeholder="妈妈"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input
              placeholder="请输入内容"
              v-model="input5"
              class="input-with-select"
              style="width:200px;display: inline-block;"
              size="mini"
            ></el-input>
          </div>
          <div class="box-border">
            <span style="display: inline-block;">姓别:</span>
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </div>
          <div class="box-border">
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dashboard from "../dashboard/index";
export default {
  data() {
    return {
      active: 0,
      input5: "",
      select: "",
      radio: "1",
      options: [
        {
          value: "选项1",
          label: "妈妈"
        },
        {
          value: "选项2",
          label: "爸爸"
        },
        {
          value: "选项3",
          label: "个人"
        }
      ],
      value: ""
    };
  },
  components: {
    dashboard
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
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
.box {
  width: 80%;
  background-color: white;
  margin: 0 auto;
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
.box-border {
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 10px;
}
</style>