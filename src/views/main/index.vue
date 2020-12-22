<template>
  <div>
    <el-container>
      <el-header style="height: 76px; top:0; left:0;width: 100%;position: fixed;z-index: 9999">
        <Header class="header" ></Header>
      </el-header>
      <el-container style="width: 1088px;margin: 0 auto;">
        <el-aside width="40px" style="height: 441px"><Aside></Aside></el-aside>
        <el-main><Main></Main></el-main>
      </el-container>
      <el-footer style="height: 450px"><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
// import { ref, Ref } from '@vue/composition-api';
// import {router} from '@/main';
// import {routes} from '@/router/routes';
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

export default {
  components: { Header, Aside, Main, Footer },
}
</script>
<style lang="scss" scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
  }
  .el-header{
    background-color: #fff;
  }

  .el-aside {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    margin-top: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    margin-top: 20px;
    padding: 0;
  }
  .el-footer{
    padding: 0;
    margin: 0;
    background-color: #41414e;

  }

</style>
