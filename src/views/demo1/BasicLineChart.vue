<template>
    <v-chart :options="option" style="width:290px;height: 300px" ></v-chart>
</template>

<script>
    export default {
        name: "BasicLineChart",
      data(){
          return{
            option : {
              xAxis: {
                type: 'value',
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [1.0, 1200.0, 901, 934, 1290, 1330, 1320],
                type: 'line'
              }]
            },
          }
      }
    }
</script>

<style scoped>

</style>
