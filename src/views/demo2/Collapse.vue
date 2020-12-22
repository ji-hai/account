<template>
  <div>
    <div class="time-title">
      <div class="left">
        <span style="font-size: 16px;font-weight: bold">28</span>
        /<span>12</span>
        /<span>2020</span>
      </div>
      <div class="right">
        <span>支出：</span><span>-243.00</span><span>收入：</span><span>+0.00</span>
      </div>
    </div>
    <div class="time-content">
      <List></List>
    </div>
  </div>
</template>

<script>
  import List from "@/views/demo2/List";
    export default {
        name: "Collapse",
      components:{ List }
    }
</script>

<style lang="scss" scoped>
  .time-title{
    height: 40px;
    line-height: 24px;
    background-color: #fff;
    padding: 8px;
  .left{
    float: left;
  span{
    padding: 0 5px;
  }
  }
  .right{
    float: right;
    padding-right: 50px;
  span{
    padding: 0 5px;
  }
  }
  }
</style>
