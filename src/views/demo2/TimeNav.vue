<template>
    <div>
      <el-container>
        <el-aside width="160px">
          <el-button type="primary">
            <i class="el-icon-arrow-up el-icon--right"></i>
          </el-button>

          <el-button type="primary">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
        </el-aside>
        <el-main>

          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              type="expand"
              prop="date"
              label="日期"
              sortable
              width="72">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>

            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="128">
            </el-table-column>

            <el-table-column
              prop="date"
              label=""
              sortable
              width="44">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="112">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="96">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="96">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              :formatter="formatter">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "TimeNav",
      data(){
          return{
            count: 1,
            data:[],
            busy:false,
            radio1:'1',
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }],
            radio:[
              {
              label:'1',
              value:'1'
            },
              {
                label:'分类',
                value:'分类'
              },
              {
                label:'2',
                value:'2'
              },
              {
                label:'3',
                value:'3'
              },
              {
                label:'4',
                value:'4'
              },
              {
                label:'5',
                value:'5'
              },
              {
                label:'6',
                value:'6'
              },
              {
                label:'7',
                value:'7'
              },
            ]
          }
      },
      methods: {
        loadMore () {
          this.busy = true;
          setTimeout(()=>{
            for(var i = 0; i<5;i++){
              if(this.data.name >=12){
                this.data.name = 1
              }else{
              this.data.push({name:this.count++})
              }
            }
            this.busy = false
          },1000)

        },
        formatter(row, column) {
          return row.address;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .el-container{
    margin: 15px;
    /*height: 400px;*/
    .el-menu-item{
      height: 80px;

      .left{
        float: left;
        font-size: 16px;
        width: 50px;
        height: 80px;
        span{
          float: left;
          margin: 0;
          height: 40px;
          padding: 1px;
        }
        span:first-child{
          font-size: 28px;
          margin-top: 10px;
        }
        span:last-child{
          font-size: 14px;
          margin-top: 14px;
        }
      }
      .right{
        float: left;
        font-size: 13px;
        width: 50px;
        height: 80px;
        span{
          float: right;
          height: 20px;
          margin-right: -20px;
          padding: 0px;
        }
        span:first-child{
          color: #f1523a;
        }
        span:last-child{
          color:#14ba89;
        }
      }

    }
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*height: 180px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
  ::v-deep .el-button--medium{
    width: 160px;
    height: 30px;
    background-color: #ccc;
    border: 0;
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
 ::v-deep .el-radio-button__inner{
   margin-top: -27px;
    height: 30px;
   width: 70px;
   margin-left: -20px;

  }
  .el-main{
    padding: 0;
  }

</style>
