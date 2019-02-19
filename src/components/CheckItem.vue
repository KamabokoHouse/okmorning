<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-button class="is-full-width">
          {{ check.name }}
          <el-switch
            v-model="isDone"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "CheckItem",
  props: {
    check: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      isDone: false
    };
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-row:first-child {
  background-color: #f9fafc;
}
.el-col {
  border-radius: 4px;
  vertical-align: middle;
}
.is-full-width {
  width: 100%;
}
</style>
