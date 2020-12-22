<template>
  <div>
    <el-container>
      <el-aside width="160px">
        <div class="header">
          <span>2020年</span>
        </div>
        <el-button type="primary">
          <i class="el-icon-arrow-up el-icon--right"></i>
        </el-button>
        <div class="time">
          <div class="time-header">
            <span>2020年</span>
          </div>
          <div class="time-content">
            <div class="left">
              <p>本月</p>
              <span style="font-size: 28px;font-weight: bold">12</span>
              <span style="font-size: 12px">月</span>
            </div>
            <div class="right">
              <span style="color: red">+20,000.00</span>
              <span style="color: forestgreen">-9,374.00</span>
            </div>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <div class="left">
              <p>本月</p>
              <span style="font-size: 28px;font-weight: bold">12</span>
              <span style="font-size: 12px">月</span>
            </div>
            <div class="right">
              <span style="color: red">+20,000.00</span>
              <span style="color: forestgreen">-9,374.00</span>
            </div>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <div class="left">
              <p>本月</p>
              <span style="font-size: 28px;font-weight: bold">12</span>
              <span style="font-size: 12px">月</span>
            </div>
            <div class="right">
              <span style="color: red">+20,000.00</span>
              <span style="color: forestgreen">-9,374.00</span>
            </div>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <div class="left">
              <p>本月</p>
              <span style="font-size: 28px;font-weight: bold">12</span>
              <span style="font-size: 12px">月</span>
            </div>
            <div class="right">
              <span style="color: red">+20,000.00</span>
              <span style="color: forestgreen">-9,374.00</span>
            </div>
          </div>
        </div>
        <div class="time">
          <div class="time-content">
            <div class="left">
              <p>本月</p>
              <span style="font-size: 28px;font-weight: bold">12</span>
              <span style="font-size: 12px">月</span>
            </div>
            <div class="right">
              <span style="color: red">+20,000.00</span>
              <span style="color: forestgreen">-9,374.00</span>
            </div>
          </div>
        </div>
        <el-button type="primary">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
      </el-aside>
      <el-main>
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="上海">
              <i class="el-icon-bottom"></i>
            </el-radio-button>
            <el-radio-button label="北京">
              <span>分类</span>
              <i class="el-icon-bottom"></i>
            </el-radio-button>
            <el-radio-button label="广州">
              <i class="el-icon-top"></i>
            </el-radio-button>
            <el-radio-button label="深圳">
              <span>金额</span>
              <i class="el-icon-top"></i>
            </el-radio-button>
            <el-radio-button label="深圳">
              <span>账户</span>
              <i class="el-icon-top"></i>
            </el-radio-button>
            <el-radio-button label="深圳">
              <span>商家/对方账户</span>
            </el-radio-button>
            <el-radio-button label="深圳">
              <span>项目</span>
              <i class="el-icon-top"></i>
            </el-radio-button>
            <el-radio-button label="深圳">
              <span>备注</span>
            </el-radio-button>
          </el-radio-group>
        </div>
        <Collapse></Collapse>
        <List></List>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import Collapse from "@/views/demo2/Collapse";
  import List from "@/views/demo2/List";
  export default {
    name: "TimeTable",
    components:{ Collapse, List  },
    data(){
      return{
        radio1:'',
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
    .header{
      font-size: 16px;
      letter-spacing: 2px;
      padding: 5px;
      background-color: #fff;
      border: 1px solid #bbb;
      margin-left: -40px;
    }
    .time{
      background-color: #fff;

      border-top: 1px solid #aaa;
      border-right: 1px solid #aaa;
      .time-header{
        background-color: #fafafc;
        height: 30px;
        span{
          display: block;
          padding: 5px;
        }
      }
      .time-content{
        padding: 8px 0;
        display: flex;
        font-size: 12px;
        .left{
          width: 50%;
          padding-top: 8px;
          p{
            margin-left: 30px;
            font-size: 8px;
            opacity: 0.8;
          }
          span{
            padding: 2px;
          }
        }
        .right{
          span{
            display: block;
            padding:3px 0;
          }
          span:first-child{
            padding-top: 15px;
          }
        }
      }
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }
  ::v-deep .el-button--medium{
    width: 160px;
    height: 20px;
    margin: 0;
    background-color: #f5f5f7;
    border: 0;
  }
  ::v-deep  .el-button--primary{
    padding: 0;
    color: #000;
    font-size: 12px;
  }
  .el-main{
    padding: 0;
  }
  ::v-deep .el-radio-button .el-radio-button__inner{
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    height: 34px;
  }
</style>
