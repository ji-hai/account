<template>
  <div v-loading="loading" style="height: 100vh;">
    <div class="header flex center" >
      XXXXXX系统 
    </div>
    <router-view class="body" />
    <div class="bottom flex between" > 
      <div :class="(router.currentRoute.name==='mobiledemo1'?'active':'')+' flex column center'"  @click="routeTo('mobiledemo1')">
        <i class="iconfont icon-shijian"></i>
        <div>demo1</div>
      </div>  
      <div :class="(router.currentRoute.name==='mobiledemo2'?'active':'')+' flex column center'" @click="routeTo('mobiledemo2')">
        <i class="iconfont icon-shijian"></i>
        <div>demo2</div>
      </div>
      <div :class="(router.currentRoute.name==='mobiledemo3'?'active':'')+' flex column center'" @click="routeTo('mobiledemo3')">
        <i class="iconfont icon-shijian"></i>
        <div>demo3</div>
      </div>
      <div :class="(router.currentRoute.name==='mobiledemo4'?'active':'')+' flex column center'" @click="routeTo('mobiledemo4')">
        <i class="iconfont icon-shijian"></i>
        <div>demo4</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, set, watch}  from '@vue/composition-api';
import {router} from '@/main';
import {storeUserInfo} from 'web-toolkit/src/case-main';
import {Toast} from 'vant';

export default {
  setup() {
    const loading = ref<boolean>(false);
    function routeTo(name: string) {
        router.push({name});
    }
    function back() {
      router.back();
    }
    onMounted(function() {
      console.log(router.currentRoute)
    });
    return{
      loading,
      routeTo, storeUserInfo,back,router
    };
  },
};
</script>
<style lang="scss" scoped>
@import "src/scss/common";
.header{
  background-color: rgba(0, 21, 41, 1);;
  height: 45px;
  box-shadow: 0 0 3px $grey-6;
  font-size: 1.3rem;
  color: white;
  position: relative;
}
.body{
  height: calc(100vh - 45px - 50px);
  overflow: scroll;
}
.bottom{
  height:50px;
  background-color: #fff;
  .flex{
    width: 18vw;
    font-size: 17px;
  }
  i{
    font-size: 1.8rem;
  }
}
.active{
  color: dodgerblue;
  border: solid 1px dodgerblue;
  background-color: rgba(30,144,255,0.2);
} 
</style>
