<template>
  <div id="Index">
    <el-container>
      <el-header>头</el-header>
      <el-container>
        <el-aside>
          <el-menu router>
            <el-submenu index="1">
              <template>
                <span slot="title">人事管理</span>
              </template>
              <el-menu-item index="1-1" route="/index/org"
                >组织单元管理</el-menu-item
              >
              <el-menu-item index="1-2">岗位管理</el-menu-item>
              <el-menu-item index="1-3">员工入职管理</el-menu-item>
              <el-menu-item index="1-4">部门调动管理</el-menu-item>
              <el-menu-item index="1-5">岗位调动管理</el-menu-item>
              <el-menu-item index="1-6">员工离职管理</el-menu-item>
              <el-menu-item index="1-7">员工信息中心</el-menu-item>
              <el-menu-item index="1-8">报表管理</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style></style>
