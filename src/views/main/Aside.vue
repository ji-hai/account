<template>
    <div class="container">
      <div class="icon">
        <icon name="bars"
              style="width: 40px;
            height: 20px;
            color: #aaa;
            margin-top: 0;
            background-color:#fff;">
        </icon>
      </div>
      <ul>
        <li><a href="#">标准理财</a></li>
        <li><a href="#">理财账本</a></li>
        <li><a href="#">生意账本</a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 70px;
    .icon{
      height: 25px;
      width: 40px;
      padding-top: 3px;
      background-color: #fff;
    }
  }
  ul{
    margin: 0 auto;
    width: 30px;
    background-color: #E9EEF3;
    /*height: 390px;*/
    li{
      font-size: 13px;
      height: 106px;
      margin: 7px 0px;
      padding: 10px;
      background-color: #fff;

    }
  }

</style>
