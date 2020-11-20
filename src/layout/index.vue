<template>
  <div class="layout-index">
    <el-row>
      <nav-bar />
    </el-row>
    <el-row>
      <el-col :lg="3">
        <menu-bar />
      </el-col>
      <el-col :lg="21">
        <tags-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuBar from "@/layout/MenuBar";
import NavBar from "@/layout/NavBar";
import TagsView from "@/layout/TagsView";
export default {
  created() {},
  components: {
    MenuBar,
    NavBar,
    TagsView
  }
};
</script>

<style lang="scss" scoped></style>
