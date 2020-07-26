<template>
  <div id="login">
    <el-row type="flex" justify="center">
      <el-form :model="user" label-width="100px">
        <el-form-item label="username">
          <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input v-model="user.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$api.sys.user.login(this.user).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$router.push("index");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
