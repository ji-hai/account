<template>
  <div>
    <div class="time-content">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <div class="title">
              <div class="title1">
                <span>05</span>/
                <span>12</span>
              </div>
              <div class="title2">
                <icon name="exchange-alt"></icon>
                <span>转账</span>
              </div>
              <div class="title3">
                <span>支</span>
              </div>
              <div class="title4">
                <span>10,000.00</span>
              </div>
              <div class="title5">
                <span>应付款项</span>
              </div>
              <div class="title6">
                <span>现金</span>
              </div>
              <div class="title7">

              </div>
              <div class="title8">

              </div>
            </div>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
      </el-collapse>

    </div>
  </div>
</template>

<script>
    export default {
        name: "List"
    }
</script>

<style lang="scss" scoped>
.title{
  display: flex;
  height: 48px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  div:nth-child(odd){
    background-color: #eee;
  }

  .title1{
    margin-left: 5px;
    width: 60px;

  }
  .title2{
    width: 128px;
    height: 40px;
    span{
      margin: 0 5px;
    }

  }
  .title3{
    width: 44px;

  }
  .title4{
    width: 128px;

  }
  .title5{
    width: 96px;

  }
  .title6{
    width: 136px;
  }
  .title7{
    width: 112px;
  }
  .title8{
    width: 129px;
  }
}
</style>
