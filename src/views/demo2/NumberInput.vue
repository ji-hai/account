<template>
    <el-input v-model="val" :placeholder="placeholder" @input="input"
    @change="change" clearable
    ></el-input>
</template>

<script>
    export default {
        name: "NumberInput",
      props:{
          placeholder:{
            type:String,
            default:"请输入...",
          },
        value: {
            type: undefined,
            default: "0",
        },
        decimal: {
            type:Number,
            default: 2,
        },
      },
      model:{
          prop:"value",
          event:"change",
      },
      data(){
          return{
            val: this.value,
          };
      },
      mounted() {
          if(this.value){
            this.val = this.handleValue(this.value);
            this.change();
          }
      },
      methods:{
          input(){
            this.val = this.handleValue(this.val);
            this.$emit("input",this.val);
          },
          handleValue(value){
            return value
            .replace(/[^\d.]/g,"") // 控制只能输入小数点或者数字
            .replace(/\.{2,}/g,".") // 控制只能有一个连续的小数点
            .replace(".","_") //将第一个小数点换成其他字符
            .replace(/\./g,"") //将其他小数点设置为空字符串
            .replace("_",".") //最后将其他字符换成小数点
            .replace(
              new RegExp(`^(-)*(\\d+)\\.(\\d{${this.decimal}}).*$`),
              "$1$2.$3"
            );//控制小数点的位数（decimal）默认最多两位
          },
        change(){
            this.val = this.fillZero(this.val);
            //将内部值传递给父组件
            this.$emit("change",this.val);
        },
        fillZero(value){
            //判断有没有小数点
            if(/(?<=\.)\d*$/g.test(value)){
              //判断小数点位数是否与decimal值相等
              let valueLength = value.match(/(?<=\.)\d*$/g)[0].length;
              if( (valueLength == 1 && value.length ==2) || ( valueLength == 2 && value.length ==3)){
                value = `${new Array(1).fill("0").join("")}${value}`
              }
              if(valueLength != this.decimal){
                //匹配小数点和其后面所有数字，然后在后面填充0
                value = value.replace(
                  /\..*$/,
                  `.${value.match(/(?<=\.)\d*$/g)[0].padEnd(this.decimal,"0")}`
                );
                if(value.match(/(?<=\.)\d*$/g)[0].length >= 3){
                  value = ''
                }
              }

            }else{
              if(value != '' || value != 0){
                value = `${value}.${new Array(this.decimal).fill("0").join("")}`;
              }
            }
            return value;
        },
      },
    };
</script>

<style scoped>

</style>
