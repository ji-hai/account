<template>
  <div>
    <div class="container">
    <!--    选择菜单栏-->
    <el-radio-group v-model="form.radio1" >
      <el-radio-button v-for="item in form.radio" :label="item.label" :key="item.value"></el-radio-button>
    </el-radio-group>
    <!--    form表单控件-->
    <el-form class="clearfix" ref="form" :model="form" label-width="40px">
      <!--      图片上传-->
      <el-form-item>
        <el-upload
          :class="{'demo-httpRequestImg':httpRequestImg}"
          action="#"
          :on-change="onChange"
          :before-upload="beforeAvatarUpload"
          list-type="picture-card"
          :auto-upload="false">
          <i  slot="default" class="el-icon-plus" ></i>
          <div slot="file" slot-scope="{file}" >
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="分类" >
        <el-cascader v-model="form.region1"  :props="{ expandTrigger: 'hover' }" :options="form.options1" :show-all-levels="false"></el-cascader>
      </el-form-item>
      <el-form-item label="账户">
        <el-select v-model='form.region2' placeholder="请选择">
          <el-option
            v-for="item in form.options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="金额">
        <NumberInput v-model="form.value" :value="form.value"></NumberInput>
      </el-form-item>
      <el-form-item label="成员">
        <el-select v-model="form.region4" placeholder="请选择">
          <el-option
            v-for="item in form.options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="时间" v-model="form.time">
        <el-date-picker style="width: 180px"
                        v-model="form.time"
                        type="datetime"
                        placeholder="选择日期时间"
                        default-time="12:00:00">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="项目">
        <el-select v-model="form.region5" placeholder="请选择">
          <el-option
            v-for="item in form.options5"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商家">
        <el-select v-model="form.region6" placeholder="请选择">
          <el-option
            v-for="item in form.options6"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="备注">
        <el-input style="width: 310px"
                  type="text"
                  placeholder="请输入内容"
                  v-model="form.text"
                  maxlength="20"
                  show-word-limit
        >
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button style="width: 160px;margin-left: 160px" type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script lang="ts">
  import { ref, onMounted } from '@vue/composition-api';
  import NumberInput from "@/views/demo2/NumberInput.vue";
    export default {
        name: "FormGroup",
      components:{ NumberInput },
      props:{
        httpRequestImg:{
          type:Boolean,
          default: false
        },
        dialogVisible:{
          type: Boolean,
          default: false
        }
      },
      model:{
        prop:["httpRequestImg","dialogVisible"],
        event:["onSubmit"]
      },
      data(){
        return{
          dialogImageUrl: '',
          disabled: false,
          form: {
            value:'',
            imageUrl:'',
            radio1:'支出',
            radio:[
              {
                value:'支出',
                label:'支出'
              },
              {
                value:'收入',
                label:'收入'
              },
              {
                value:'转账',
                label:'转账'
              },
              {
                value:'代付',
                label:'代付'
              },
              {
                value:'借入',
                label:'借入'
              },
              {
                value:'借出',
                label:'借出'
              },
              {
                value:'还款',
                label:'还款'
              },
              {
                value:'收债',
                label:'收债'
              },
            ],
            time:'',
            text:'',
            region1: [],
            region2: '',
            region3: '',
            region4: '',
            region5: '',
            region6: '',
            options1: [
              {
                value: '日常购物',
                label: '日常购物',
                children:[{
                  value: '母婴用品',
                  label: '母婴用品'
                },]
              },
              {
                value: '衣服饰品',
                label: '衣服饰品',
                children:[{
                  value: '一致',
                  label: '一致'
                }, {
                  value: '反馈',
                  label: '反馈'
                }, {
                  value: '效率',
                  label: '效率'
                }, {
                  value: '可控',
                  label: '可控'
                }]
              },
              {
                value: '食品酒水',
                label: '食品酒水',
                children:[{
                  value: '一致',
                  label: '一致'
                }, {
                  value: '反馈',
                  label: '反馈'
                }, {
                  value: '效率',
                  label: '效率'
                }, {
                  value: '可控',
                  label: '可控'
                }]
              },
              {
                value: '居家物业',
                label: '居家物业',
                children:[{
                  value: '一致',
                  label: '一致'
                }, {
                  value: '行车交通',
                  label: '行车交通'
                }, {
                  value: '效率',
                  label: '效率'
                }, {
                  value: '可控',
                  label: '可控'
                }]
              },
              {
                value: '行车交通',
                label: '行车交通',
                children:[{
                  value: '一致',
                  label: '一致'
                }, {
                  value: '行车交通',
                  label: '行车交通'
                }, {
                  value: '效率',
                  label: '效率'
                }, {
                  value: '可控',
                  label: '可控'
                }]
              },
            ],
            options2:[
              {
                value:'现金',
                label:'现金'
              },
              {
                value:'银行卡',
                label:'银行卡'
              },
              {
                value:'余额宝',
                label:'余额宝'
              },
              {
                value:'应付款项',
                label:'应付款项'
              }
            ],
            options4:[
              {
                value:'无',
                label:'无'
              },
              {
                value:'老公',
                label:'老公'
              }
            ],
            options5:[
              {
                value:'无',
                label:'无'
              }],
            options6:[
              {
                value:'超市',
                label:'超市'
              }
            ]
          },
        }
      },
      setup() {
        const loading = ref<boolean>(false);
        return{
          loading,
        };
      },
      mounted: ()=> {
      },
      methods: {
        onSubmit: function () {
          console.log(this.form)
        },
        handleRemove(file:String) {
          console.log(file);
        },
        handlePictureCardPreview(file:String) {
          // this.dialogImageUrl = file.url;
          // this.dialogVisible = true;
        },
        handleDownload(file:String) {
          console.log(file);
        },
        beforeAvatarUpload:function (file:string) :void{

        },
        onChange:function () {
          this.httpRequestImg = true
        }
      },
    }
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 70px;
  }
  .clearfix:after{
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .clearfix{
    *zoom:1;
  }
  .demo-httpRequestImg{
    ::v-deep .el-upload--picture-card{
      display: none;
    }
  }
  .el-form-item:first-child{
    margin-left: -30px;
  }
  ::v-deep .el-form-item:nth-last-child(2){
    .el-input__inner{
      width: 300px;
      border: 0;
      border-radius: 0;
      border-bottom: 1px solid #ccc;
    }
  }
  ::v-deep .el-radio-button__inner{
    /*background-color: red;*/
    border: none;
  }
  .el-radio-button{
    height: 40px;
    margin: 10px;
    border: none;
  }
  /*单选按钮边框*/
  ::v-deep .el-radio-button .el-radio-button__inner{
    border-radius: 0;
    border: none;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 110px;
    height: 110px;
    line-height: 110px;
    text-align: center;

  }

  .container{
    background-color: #fff;
    height: 250px;
    /*width: 1000px;*/
  }
  .el-form-item{
    float: left;

  }
  /*输入框*/
  ::v-deep .el-input__inner{
    width: 180px;
    font-size: 12px;
    /*margin-left: 2px;*/
  }
  /* label字体设置*/
  ::v-deep .el-form-item__label{
    font-size: 14px;
    margin-left: 0px;
    letter-spacing: 2px;
    padding: 0;
  }
</style>
