<template>
  <div>
    <el-table
      :data="data1"
      align="left"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        align="left"
        prop="date"
        width="130">
        <template slot-scope="scope">
          <icon :name="scope.row.icon"></icon>
          <span style="margin-left: 10px">{{ scope.row.text }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="week"
        label="本周"
        width="160">
        <template slot-scope="scope">
          <icon name="yen-sign"></icon>
          <span style="margin-left: 10px">{{ formatNumber(scope.row.week) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="month"
        align="center"
        label="本月"
        width="160">
        <template slot-scope="scope">
          <icon name="yen-sign"></icon>
          <span style="margin-left: 10px">{{ formatNumber(scope.row.month) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="year"
        align="center"
        label="本月">
        <template slot-scope="scope">
          <icon name="yen-sign"></icon>
          <span style="margin-left: 10px">{{ formatNumber(scope.row.year) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<style>
  .el-table .warning-row {
    /*background: oldlace;*/
    color: #14ba89;
  }

  .el-table .success-row {
    /*background: #f0f9eb;*/
    color: #f15231;
  }
</style>

<script>
  import { inject, onMounted } from '@vue/composition-api';
  export default {
    name:"SingleTable",
    setup(){
      // 通过inject接收父组件的值
      const data1 = inject("table");

      // 更改table行的颜色
      function tableRowClassName({row, rowIndex}){
        if (rowIndex === 1) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
        return '';
      };
      return {
        tableRowClassName,
        data1
      }
    }
  }
</script>
