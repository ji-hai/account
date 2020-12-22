<template>
  <div class="container">
    <FormGroup></FormGroup>
    <TextHeader></TextHeader>
    <SelectGroup style="height: 120px"></SelectGroup>
    <TimeTable></TimeTable>
<!--    <TimeNav></TimeNav>-->
<!--    <ComNav></ComNav>-->
  </div>
</template>
<script lang="ts">
  import NumberInput from './NumberInput.vue';
  import FormGroup from './FormGroup.vue';
  import TextHeader from './TextHeader.vue';
  import SelectGroup from './SelectGroup.vue';
  import TimeTable from './TimeTable.vue'
  // import TimeNav from './TimeNav.vue';
  // import ComNav from './ComNav.vue';
export default {
  name:"demo2",
  components:{
    NumberInput,
    TextHeader,
    FormGroup,
    SelectGroup,
    TimeTable
  },

};
</script>
<style lang="scss" scoped>
.container{
  /*padding-top: 60px;*/
}
</style>
