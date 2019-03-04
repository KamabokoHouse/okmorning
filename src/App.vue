<template>
  <div id="app">
    <el-container>
      <CommonHeader></CommonHeader>
      <el-main>
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </el-main>
      <CommonFooter></CommonFooter>
    </el-container>
  </div>
</template>

<script>
import CommonHeader from "@/views/common/Header.vue";
import CommonFooter from "@/views/common/Footer.vue";

export default {
  name: "App",
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style>
html,
body {
  touch-action: none;
  height: 100vh;
  margin: 0;
}

#app > .el-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  flex: 1;
}
</style>
