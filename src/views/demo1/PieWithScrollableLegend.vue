<template>
    <v-chart :options="option" autoresize style="width: 290px;height: 276px"></v-chart>
</template>

<script lang="ts">
  import { ref, onMounted } from '@vue/composition-api';
    export default {
        name: "PieWithScrollableLegend",
      setup(){
        const loading = ref<boolean>(false);
          return{
            loading,
            option : {
              // title: {
              //   text: '本月数量统计',
              //   subtext: '2020年12月',
              //   left: 'left'
              // },
              tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 0,
                top: 20,
              },
              series: [
                {
                  name: '姓名',
                  type: 'pie',
                  radius: '60%', //饼图半径大小
                  center: ['40%', '40%'],//饼图位置
                  label:{  //饼图显示的内容
                    normal:{
                      // show:true,
                      position:'inner',
                      textStyle:{
                        fontWeight:300,
                        fontSize:10
                      },
                      formatter: '{b}'
                    }
                  },
                  data: [
                    { value: 1, name: '货品材料' },
                    { value: 2, name: '人工支出' },
                    { value: 3, name: '运营费用' },
                    { value: 4, name: '办公费用' },
                    { value: 5, name: '其他杂项' }
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]}
          }
      },
      mounted() {

      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
