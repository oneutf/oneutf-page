<template>
  <div id="login">
    <el-row type="flex" justify="center">
      <el-form :model="user" label-width="100px">
        <el-form-item label="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="password">
          <el-input type="password" v-model="user.password"></el-input>
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
        username: "",
        password: ""
      }
    };
  },
  mounted() {
    this.$api.sys.user
      .list()
      .then(res => {
        console(res);
        debugger;
      })
      .catch(res => {
        console.log(res);
      });
  }
};
</script>

<style lang="scss" scoped>
#login {
  .el-form {
    background-color: red;
  }
}
</style>
