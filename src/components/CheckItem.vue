<template>
  <div>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-button class="is-full-width" round @click="done">
        {{ check.name }}
        <el-switch
          v-model="isDone"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </el-button>
    </el-col>
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
  },
  methods: {
    done: function() {
      if (this.isDone) {
        this.isDone = false;
      } else {
        this.isDone = true;
      }
    }
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  vertical-align: middle;
}
.is-full-width {
  width: 100%;
}
</style>
