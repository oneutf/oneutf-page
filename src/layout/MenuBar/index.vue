<template>
  <div class="menu-bar-index">
    <el-menu default-active="activeMenu">
      <el-submenu index="1" v-for="item in list" :key="item.code"> </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      activeMenu: 1
    };
  },
  created() {
    let menuJson = require("@/assets/menu/menu.json");
    console.log(menuJson);
  }
};
</script>

<style lang="scss" scoped></style>
