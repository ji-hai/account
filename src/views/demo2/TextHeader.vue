<template>
  <div>
    <el-container>
      <el-header>
        <div class="left">
          <span>账目清单</span>
          <span>2020.12.01 ~ 2020.12.31</span>
        </div>
        <div class="right">
          <span>总支出</span><span>-9,319.00</span>
          <el-divider direction="vertical"></el-divider>
          <span style="font-size: 12px">总收入</span><span >+20,000.00</span>
          <el-divider direction="vertical"></el-divider>
          <span>结余</span><span>10,681.00</span>
          <span>(单位：元)</span>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
  // import ComSelect from "@/views/demo2/ComSelect";
  export default {
    name: "TextHeader",
    components:{  }
  }
</script>

<style lang="scss" scoped>

  .el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-top: 10px;
    width: 1048px;
    .left{
      float: left;
      font-size: 12px;
      padding: 0 24px;
      span:first-child{
        font-size: 18px;
      }
      span:nth-child(2){
        padding: 0;
        margin-left: 5px;
        margin-top: 5px;
      }
    }
    .right{
      float: right;
      .el-divider--vertical{
        position: absolute;
        margin-top: 22px;
        margin-left: 1px;
      }
      span{
        padding: 10px;
      }
      span:nth-child(1){
        font-size: 12px;
      }
      span:nth-child(2){
        color: #14ba89;
        font-size: 16px;
      }
      span:nth-child(5){
        color: #f1523a;
        font-size: 16px;
      }
      span:nth-last-child(3){
        font-size: 12px;
      }
      span:nth-last-child(2){
        color: #808080;
        font-size: 16px;
      }
      span:last-child{
        font-size: 12px;
        opacity: 0.6;
      }
    }

  }
  .el-main {
    background-color: #fff;
    color: #333;
    padding: 0;
    div{
      float: left;
      .block{
        /*width: 190px;*/
        /*margin-left: 20px;*/
      }
    }
  }

</style>
