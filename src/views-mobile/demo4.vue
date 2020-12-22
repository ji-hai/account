<template>
  <div v-loading="loading">
    demo4
 
  </div>
</template>

<script lang="ts">
import { ref, onMounted, set, watch}  from '@vue/composition-api';
import {router} from '@/main';
import {Toast} from 'vant';


export default {
  setup() {
    const loading = ref<boolean>(false);
 
    onMounted(function() {
    });
    return{
      loading, 
      
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
