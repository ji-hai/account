<template>
  <div class="flex">
    <div v-for="(item, index) in addrArray" class="el-input el-input--small" :key="index"
         :class="setWrap()" style="display:flex; min-width: 60px;"
         onpaste="return false">
      <input
        class="el-input__inner"
        v-model="addrArray[index]" :key="index" style="text-align: center;"
        maxlength="3"
        :class="setGroup()"
        :disabled="!available"
        @blur="blur1($event, index)"
        @keypress="$event.returnValue=limitCharacter($event, index)"
        @keydown="lastFocus($event, index)"
        @keyup="nextFocus($event, index)"/>
      <div class="point" v-if="index<3">&bull;</div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, watch} from '@vue/composition-api';
import {isNil} from 'web-toolkit/src/utils';

export default {
  name: 'IPInput',
  props: {
    value: {
      type: String,
      default: null,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  setup(props: Record<string, any>, ctx: any) {
    const addrArray = ref<any>(isNil(props.value) ? ['', '', '', ''] : props.value.split('.'));
    const addrResult = ref<any>('');
    // 独立性区分groupId --- 根据毫秒时间
    const groupId = ref<any>(guid());

    watch(() => props.value, () => {
      addrArray.value = isNil(props.value) ? ['', '', '', ''] : props.value.split('.');
    });
      // 禁止输入不是数字的字符
    const limitCharacter = (event: any, index: number) => {
      return !event.key.match(/[^0-9]/);
    };
    const nextFocus = (event: any, index: number) => {
      const dom = document.getElementsByClassName(`${groupId.value}`);
      const currInput: any = dom[index];
      const nextInput: any = dom[index + 1];

      // 输入长度为3聚焦到下一个输入框
      if (!(event.keyCode === 46 || event.keyCode === 8) && ![37, 38, 39, 40].includes(event.keyCode)) {
        addrArray.value[index] = addrArray.value[index].replace(/[^0-9]/g, '');
        event.target.value = addrArray.value[index];
        if (currInput.value.length === 3 && nextInput && nextInput.value.length < 3) {
          nextInput.focus();
        }
      }

      // 输入为'.'聚焦到下一个输入框
      if (event.key === '.' && nextInput) {
        nextInput.focus();
      }

      // 输入大于255自动转为255
      if (event.target.value > 255) {
        addrArray.value[index] = '255';
        event.target.value = '255';
      }
      // 将ip转为字符串并更新
      addrResult.value = addrArray.value.join('.');
      ctx.emit('input', addrResult.value);
    };

    // backspace | delete 删除整个输入框聚焦到上一个输入框
    const lastFocus = (event: any, index: number) => {
      const dom = document.getElementsByClassName(`${groupId.value}`);
      const currInput: any = dom[index];
      const lastInput: any = dom[index - 1];

      if (event.keyCode === 46 || event.keyCode === 8) {
        if (currInput.value.length === 0 && lastInput) {
          lastInput.focus();
        }
      }
    };

    const blur1 = (event: any, index: number) => {
      addrArray.value[index] = addrArray.value[index].replace(/[^0-9]/g, '');
      event.target.value = addrArray.value[index];
      addrResult.value = addrArray.value.join('.');
      ctx.emit('input', addrResult.value);
    };

    const setWrap = () => {
      const obj: any = {};
      obj['is-disabled'] = !props.available;
      return obj;
    };

    function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    const setGroup = () => {
        const obj: any = {};
        obj[`${groupId.value}`] = true;
        return obj;
    };

    return {
      addrArray,
      limitCharacter,
      nextFocus, lastFocus,
      blur1,
      setWrap, setGroup,
    };
  },
};
</script>

<style scoped lang="scss">
  .point {
    text-align: center;
    width: 10px;
  }

  .is-valid {
    border-color: #F56C6C;
    -webkit-animation: mymove 2s infinite; /* Chrome, Safari, Opera */
    animation: mymove 2s infinite;
  }

  /* Chrome, Safari, Opera */
  @-webkit-keyframes chcolor {
    50% {
      border-color: #F56C6C;
    }
  }

  /* Standard syntax */
  @keyframes chcolor {
    50% {
      border-color: #F56C6C;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
  }

</style>
