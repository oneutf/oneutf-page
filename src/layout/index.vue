<template>
  <div class="layout-index">
    <el-row>
      <span>top</span>
    </el-row>
    <el-row>
      <el-col :lg="4">
        <menu-bar />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuBar from "@/layout/MenuBar";
export default {
  created() {
    console.log("object");
  },
  components: {
    MenuBar
  }
};
</script>

<style lang="scss" scoped></style>
