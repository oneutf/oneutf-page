<template>
  <div class="menu-bar-index">
    <el-menu default-active="activeMenu">
      <el-submenu :index="item.code" v-for="item in list" :key="item.code">
        <template slot="title">{{ item.name }}</template>
        <el-menu-item
          :index="childrenItem.code"
          v-for="childrenItem in item.children"
          :key="childrenItem.code"
          >{{ childrenItem.name }}</el-menu-item
        >
      </el-submenu>
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
    this.list = menuJson;
  }
};
</script>

<style lang="scss" scoped></style>
