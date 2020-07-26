<template>
  <div id="org">
    <el-row>
      <el-col :span="24" id="btns">
        <el-button type="primary" @click="form = true">新增</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="list">
          <el-table-column label="编号" prop="code"></el-table-column>
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="类型" prop="type"></el-table-column>
          <el-table-column label="电话" prop="telephone"></el-table-column>
          <el-table-column label="传真" prop="fax"></el-table-column>
          <el-table-column label="描述" prop="desc"></el-table-column>
          <el-table-column label="上级部门" prop="deptParent"></el-table-column>
          <el-table-column
            label="成立日期"
            prop="establishTime"
          ></el-table-column>
          <el-table-column label="操作"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog title="新增" :visible.sync="form">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :model="data" ref="form" label-width="100px">
            <el-form-item label="编号">
              <el-input v-model="data.code" placeholder="请输入编号"></el-input>
            </el-form-item>
            <el-form-item label="名称">
              <el-input v-model="data.name" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="data.type" placeholder="请输入类型">
                <el-option
                  v-for="item in type"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话">
              <el-input
                v-model="data.telephone"
                placeholder="请输入电话"
              ></el-input>
            </el-form-item>
            <el-form-item label="传真">
              <el-input v-model="data.fax" placeholder="请输入传真"></el-input>
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="data.desc" placeholder="请输入描述"></el-input>
            </el-form-item>
            <el-form-item label="上级部门">
              <el-select v-model="data.deptParent" placeholder="请输入上级部门">
                <el-option
                  v-for="item in list"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="成立时间">
              <el-date-picker
                v-model="data.establishTime"
                type="datetime"
                placeholder="成立时间"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">新增</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      form: false,
      data: {},
      type: [
        { value: "公司", label: "公司" },
        { value: "部门", label: "部门" }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$api.hr.org.create(this.data).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.$api.hr.org.getDataTable().then(res => {
      this.list = res.data.list;
    });
  }
};
</script>

<style lang="scss" scoped></style>
