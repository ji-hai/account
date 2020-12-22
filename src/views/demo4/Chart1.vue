<template>
  <div>
    <SelectGroup></SelectGroup>
    <div class="container1">
      <span>日常收支表</span>
      <el-divider></el-divider>
<!--      <BarChart></BarChart>-->
    </div>
    <div class="container2">
      <BarChart></BarChart>
    </div>
  </div>
</template>

<script>
  import SelectGroup from "../demo2/SelectGroup";
  import BarChart from "./BarChart";
    export default {
        name: "Chart1",
      components:{ SelectGroup, BarChart },


    }
</script>

<style lang="scss" scoped>
 .container1{
  padding: 10px;

}
</style>
