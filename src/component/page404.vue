<template>
  <div class="out">
    <i class="iconfont icon-404"></i>
    <div class="info">{{ $route.params.msg === undefined?'当前页面找不到':$route.params.msg }}</div>
    <br />
    <el-button type="primary" @click="$router.back()">返 回</el-button>
    <el-button type="primary" @click="logout()" style="margin-left: 10px">返回至登录页</el-button>
  </div>
</template>

<script>
export default {
  name: 'page404',
  methods: {
    logout() {
      this.$store.commit('removeToken');
      this.$router.push({name: 'login'});
    },
  },
};
</script>


<style scoped lang="scss">
  .out{
    text-align: center;
    padding: 70px 0;
  }

  img{
    height: 200px;
    margin-bottom: 10px;
  }

  i{
    color: $active-text;
    font-size: 16rem;
  }

  .info{
    color: $active-text;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
</style>
