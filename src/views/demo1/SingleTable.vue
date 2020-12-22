<template>
  <el-table
    :data="tableData"
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
        <span style="margin-left: 10px">{{ scope.row.week }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="month"
      align="center"
      label="本月"
      width="160">
      <template slot-scope="scope">
        <icon name="yen-sign"></icon>
        <span style="margin-left: 10px">{{ scope.row.month }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="year"
      align="center"
      label="本年">
      <template slot-scope="scope">
        <icon name="yen-sign"></icon>
        <span style="margin-left: 10px">{{ scope.row.year }}</span>
      </template>
    </el-table-column>
  </el-table>
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
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          icon:'plus-circle',
          text:'收入',
          week: '33,000.00',
          month: '33,000.00',
          year: '33,000.00',
        },
          {
            icon:'minus-circle',
            text:'支出',
            week: '33,000.00',
            month: '33,000.00',
            year: '33,000.00',
          },
         ]
      }
    }
  }
</script>
