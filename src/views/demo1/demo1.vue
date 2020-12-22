<template>
  <div v-loading="loading">
    <el-container>
      <el-aside width="706px">
        <div class="header1">
          <span>资产概况</span>
          <el-divider></el-divider>
        </div>
        <div class="main1">
          <span>
            <p >资产</p>
            <p style="color: #f1523a">39,100.00</p>
          </span>
          <el-divider direction="vertical"></el-divider>
          <span>
            <p>资产</p>
            <p style="color: #14ba89">39,100.00</p>
          </span>
          <el-divider direction="vertical"></el-divider>
          <span>
            <p>资产</p>
            <p>39,100.00</p>
          </span>
        </div>
        <div class="header2 ">
          <span>收支表</span>
          <SingleTable></SingleTable>
        </div>

        <div class="header1 header3 header2">
          <span>2020年12月财务简报</span>
          <el-divider></el-divider>
          <p style="font-size: 10px;opacity: 0.8">
            <icon name="file-signature" style="opacity: 0.7"></icon>
            今天是您记账的第
            <span style="font-size: 18px;color: #000;padding: 0 1px">19</span>
            天，此账本共计录
            <span style="font-size: 18px;color: #000;padding: 0 1px">52</span>
            笔流水
          </p>
          <p style="margin:10px 0;font-size: 10px;opacity: 0.8">
            <icon name="water" style="opacity: 0.7"></icon>
            本月预算额度
            <span style="font-size: 18px;color: #000;padding: 0 1px">80,000.00</span>
            元，已使用
            <span style="font-size: 18px;color: #14ba89;padding: 0 1px">74,1000.00</span>
            元，还剩
            <span style="font-size: 18px;color: #000;padding: 0 1px">5,900.00</span>
            元可用。
            <a href="#" style="color: #bf8619">了解更多
              <icon style="width: 10px;height: 12px;" name="greater-than"></icon>
            </a>
          </p>
        </div>
        <div class="main2">
          <div class="right">
            <div class="header2 header1 header3">
              <span>本月分类支出</span>
              <span style="padding-left: 90px;font-size: 12px">2020年12月</span>
              <el-divider></el-divider>
            </div>
            <PieChart style="margin-top: -30px"></PieChart>
          </div>
          <div class="left">
            <div class="header2 header1 header3">
              <span>本月支出趋势图</span>
              <span style="margin-left: 110px;font-size: 12px;">
              <a href="#" style="color: #bf8619">更多
                <icon style="width: 10px;height: 12px;" name="greater-than"></icon>
              </a>
            </span>
              <el-divider></el-divider>
            </div>
            <LineChart style=";margin-top: -70px"></LineChart>
          </div>
        </div>
      </el-aside>
      <el-main>还没有哦</el-main>
    </el-container>

  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
import SingleTable from './SingleTable.vue';
import PieChart from './PieWithScrollableLegend.vue';
import LineChart from './BasicLineChart.vue';
export default {
  setup() {
    const loading = ref<boolean>(false);
    return{
      loading,
    };
  },
  components:{ SingleTable, PieChart, LineChart },
  data(){
    return{
      activeIndex:'',

    }
  },
};
</script>
<style lang="scss" scoped>
  .el-container{
    margin-top: 70px;
  }
  .el-aside {
    background-color: #fff;
    color: #333;
    padding: 52px 52px 0 36px;
    .header1,.header2{
      font-size: 18px;
    }
    .header2{
      margin-top: 20px;

    }
    .header3{
      margin-top: 50px;
    }
    .main1{
      span{
        display: inline-block;
        width: 166px;
        p{
          display: block;
          font-size: 12px;
        }
        p:last-child{
          font-size: 26px;
          color: #312f2c;
        }
        p:nth-child(odd){
          opacity: 0.6;
        }

      }
      .el-divider--vertical{
        width: 1px;
        height: 45px;
        margin-right: 50px;
        margin-top: -10px;
      }

    }
    .main2{
      display: flex;
      .right{
        width: 300px;
        padding:0 9px;
        flex: 1;
      }
      .left{
        width: 300px;
        flex: 1;
      }
    }


  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
