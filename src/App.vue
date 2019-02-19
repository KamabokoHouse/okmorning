<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col :span="24">head</el-col>
      </el-header>
      <el-main>
        <el-col :span="24">
          <router-view></router-view>
        </el-col>
      </el-main>
      <el-footer>
        <el-col :span="24">foot</el-col>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
html,
body {
  height: 100vh;
  margin: 0;
}

#app > .el-container {
  margin-bottom: 40px;
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

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
