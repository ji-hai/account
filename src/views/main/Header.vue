<template>
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <el-menu
          default-active="active"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#fff"
          text-color="#312f2c"
          active-text-color="#e79d05"
          @select="routeTo"  >
          <el-menu-item index="demo1">概览</el-menu-item>
          <el-menu-item index="demo2">记一笔</el-menu-item>
          <el-menu-item index="demo3">账户</el-menu-item>
          <el-menu-item index="demo4">报表</el-menu-item>
          <el-menu-item index="demo5">设置</el-menu-item>
          <el-submenu index="demo6">
            <template slot="title">新功能</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <div class="flag">
            <a href="#"><icon style="color: gray" name="bell"></icon></a>|
            <a href="#">个人中心</a>|
            <a href="#">用户体验</a>|
            <a href="#"><icon style="color: #e79d05" name="sign-out-alt"></icon></a>
          </div>
        </el-menu>
      </div>
    </div>
</template>

<script>
  import {router} from '@/main';
  import { ref, onMounted, computed, watch } from '@vue/composition-api';
  import {checkPrivilege, storePageMenu, storeUserInfo, storeCurrentRoute} from 'web-toolkit/src/case-main';
    export default {
        name: "Header",
      setup(){
        function routeTo(name) {
          router.push({ name });
        };
          return{
            indexActive:'',routeTo
          }
      }
    }
</script>

<style lang="scss" scoped>
  ul.el-menu-demo.el-menu--horizontal.el-menu{
    height: 76px;
    line-height: 76px;
}
  li.el-menu-item.is-active{
    height: 75px;
    line-height: 75px;
  }
  li.el-menu-item{
    height: 75px;
    line-height: 75px;
    font-size: 16px;
  }
 ::v-deep .el-submenu .el-submenu__title {
    padding: 0 16px;
    height: 75px;
    line-height: 75px;
  }
  header.el-header .el-menu-item{
    padding: 0 18px;
  }
  .left{

    width: 370px;
    height: 76px;
    background-color: #fff;
  }
  .right{
    /*width: 100%;*/
    .flag{
      display: flex;
      padding: 0 20px;
      font-size: 12px;
      a{
        padding:0 10px;
        color: #2e2e2e;
      }
      a:first-child{
        padding-left: 0;
      }
      a:last-child{
        padding-right: 0;
      }
    }
  }
  .container{
    width: 1088px;
    margin: 0 auto;
    display: flex;
  }
</style>
