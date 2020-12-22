<template>
  <div v-loading="loading">
    <el-container>
      <el-aside width="173px">
        <div class="top">
          <div>
            <span>总资产</span>
            <span style="color:#f15231;">26,681.00</span>
          </div>
          <div>
            <span>总资产</span>
            <span style="color:#14ba89;">26,681.00</span>
          </div>
          <div>
            <span>总资产</span>
            <span>26,681.00</span>
          </div>
        </div>

      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from '@vue/composition-api';
// import TimeTable from "@/views/demo2/TimeTable.vue";

export default {
  name:'demo3',
  components:{  },
  setup() {
    const loading = ref<boolean>(false);
    return{
      loading,
    };
  },
};
</script>
<style lang="scss" scoped>
  .el-container{
    margin-top: 70px;
  }
  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    height: 200px;
    /*line-height: 200px;*/
    padding: 28px 32px 10px 20px;
    .top{
      margin-top: 0;
      margin-left: 20px;
      div{
        padding-top: 20px;
        span{
          display: block;
          text-align: left;
        }
        span:first-child{
          font-size: 12px;
          opacity: 0.6;
        }
        span:last-child{
          font-size: 18px;
        }
      }
      div:first-child{
        padding-top: 0;
      }
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
</style>
