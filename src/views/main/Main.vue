<template>
    <div class="container">
      <router-view></router-view>
    </div>
</template>

<script>
  import Demo1 from '../demo1/demo1.vue'
    export default {
        name: "Main",
      components:{
        Demo1
      },
      data(){
          return{
            activeIndex:'1'
          }
      },
    }
</script>

<style lang="scss" scoped>
.container{
  min-width: 1048px;
}
</style>
