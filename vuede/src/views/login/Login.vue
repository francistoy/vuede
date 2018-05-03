<template>
  <div class="login-container">
    <h3 class="login-h3">系统登录</h3>
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="60px">
      <el-form-item prop="account" label="账号">
        <el-input type="text" v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="记住密码" label-width="70px">
        <el-switch v-model="PasswordSave" active-color="#13ce66" class="password-save"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button class="login-button" type="primary" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="正在登录.." @click.native.prevent="handleLogin('loginForm')">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false,
        PasswordSave: true,
        loginForm: {
          account: '',
          password: '',
        },
        rules: {
          account: [{
            required: true,
            message: "请输入账号",
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: "请输入密码",
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      handleLogin: function (formname) {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$refs[formname].validate((valid) => {
            if (valid) {
              if (this.loginForm.account == "admin" && this.loginForm.password == "123456") {
                let user = {
                  account: this.loginForm.account,
                  password: this.loginForm.password
                };
                sessionStorage.setItem('user',user);
                this.$router.push({
                  path: '/home'
                });
              } else {
                alert('账号或者密码错误');
              }
            } else {
              console.log("error submit");
            }
          });
        }, 2000);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    width: 450px;
    margin: 100px auto 0;
    border: 1px solid #eee;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;
    padding: 10px 30px 10px 10px;
    .login-h3 {
      text-align: center;
    }
  }

  .login-button {
    margin-left: 100px;
  }

</style>
