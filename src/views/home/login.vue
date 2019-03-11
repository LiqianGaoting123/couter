<template>
  <el-container>
    <el-header>
      <div class="header-login">
        <div class="logo"></div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            线路1-杭州
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">线路1-杭州</el-dropdown-item>
            <el-dropdown-item command="b">线路2-北京</el-dropdown-item>
            <el-dropdown-item command="c">线路1-杭州</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-main>
      <div class="main-login">
        <div class="main">
          <div class="left-box">
            <div class="left-img">
              <img src="../../assets/left_banner.118775a6.png" style="width:100%;height:100%;">
              <img src="../../assets/login_qrcode.af061356.png" style="width:75px;height:75px" alt>
              <p class="left-tilte">更多信息请扫二维码</p>
            </div>
          </div>
          <div class="box">
            <div class="title">验证码登录</div>
            <el-form
              :model="Register"
              ref="RegisterForm"
              :rules="rules"
              label-width="0"
              class="RegisterForm"
            >
              <el-form-item prop="phone">
                <el-input v-model="Register.phone" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="验证码" class="code">
                <el-input v-model="Register.sendcode" placeholder="请输入验证码" style="width:180px"></el-input>
                <el-button
                  type="button"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled==false"
                >获取验证码</el-button>
                <el-button
                  type="button"
                  @click="sendcode"
                  :disabled="disabled"
                  v-if="disabled==true"
                >{{btntxt}}</el-button>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
            </el-form>
            <div class="message"></div>
          </div>
        </div>
      </div>
    </el-main>
    <el-footer>
      <div class="footer-login">
        <div class="text">
          <i class="el-icon-location"></i>
          杭州市西湖区古墩路598号同人广场A座3楼
        </div>
        <div class="text">
          <i class="el-icon-phone"></i>400-6677-456(小麦助教)
        </div>
      </div>
    </el-footer>
  </el-container>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      Register: {
        phone: "",
        sendcode: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        sendcode: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送",
      input: "",
      input5: ""
    };
  },
  methods: {
    //手机验证发送验证码
    sendcode() {
      const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.Register.phone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true
        });
        return;
      }
      if (!reg.test(this.Register.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          center: true
        });
        return;
      } else {
        console.log(this.Register.phone);
        this.$message({
          message: "发送成功",
          type: "success",
          center: true
        });
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    //60S倒计时
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
    submitForm() {
        this.$router.push('grade')
    },
    handleCommand(command) {
      this.$message(this.command);
    }
  }
};
</script>
<style rel="stylesheet/scss" scoped>
@import "../../assets/styles/login.css";
</style>