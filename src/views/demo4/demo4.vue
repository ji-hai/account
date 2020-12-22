<template>
<el-container style="height: 500px; border: 1px solid #eee;margin-top: 70px">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu>
      <el-menu-item index="1">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="2">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="3">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="4">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="5">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
      <el-menu-item index="6s">
        <icon name=""></icon>
        <span>导航1</span>
      </el-menu-item>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>汇率日期：</span>
      <span>2020-12-17</span>
      <span>(单位：元)</span>
    </el-header>
    <el-main>
      <div>
        <Chart1></Chart1>
      </div>
    </el-main>
  </el-container>
</el-container>
</template>
<style lang="scss" scoped>
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    .el-menu{
      .el-menu-item{
        height: 71px;
        line-height: 71px;
      }
    }
  }

  .el-main{
    margin: 0;
    padding: 0;
    background-color: #fff;
  ::v-deep .block:last-child{
      display: none;
    }
  }
</style>

<script>
  import Chart1 from "./Chart1";
  export default {
    name:'demo4',
    components:{ Chart1 },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        radio1:'',
      }
    }
  };
</script>
