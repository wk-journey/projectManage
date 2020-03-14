<template>
  <div class="login-container">
    <el-form :model="loginForm" class="login-form">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item label="用户名：">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>

      <el-form-item label="密 码：">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "Kai",
        password: "123456"
      },
      redirect: undefined,
      otherQuery: {}
    };
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("user/login", this.loginForm)
        .then(res => {
          this.$router.push({
            path: this.redirect || "/",
            query: this.otherQuery
          });
          // .catch(err => {
          //   console.log(err)
          // })
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
$cursor: #bbbbbb;

// -webkit-mask:蒙板  cater-color：光标颜色
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      // 去除系统默认appearance的样式,常用于IOS下移除原生样式
      -webkit-appearance: none;
    }
  }
}
</style>
