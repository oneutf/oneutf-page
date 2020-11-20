<template>
  <div class="tags-view-index">
    <el-tabs
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="clickTab($event)"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <router-view />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabs: [
        {
          title: "Tab 1",
          name: "name1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "name2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    removeTab() {},
    clickTab(e) {
      console.log(e.name);
    }
  }
};
</script>

<style></style>
