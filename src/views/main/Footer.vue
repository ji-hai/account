<template>
  <div>
    <div class="container">
      <div class="container1">
        <div class="demo demo1">
        <h1>产品下载</h1>
        <ul>
          <li><a href="#">
            <icon name="caret-right" style="margin-right: 10px"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="caret-right" style="margin-right: 10px"></icon>
            <span>随手记IOS</span></a>
          </li>
        </ul>
      </div>
        <div class="demo demo2">
        <h1>产品下载</h1>
        <ul>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
        </ul>
      </div>
        <div class="demo demo3">
        <h1>产品下载</h1>
        <ul>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
        </ul>
      </div>
        <div class="demo demo4">
        <h1>产品下载</h1>
        <ul>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
        </ul>
      </div>
        <div class="demo demo5">
        <h1>产品下载</h1>
        <ul>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
          <li><a href="#">
            <icon name="angle-right"></icon>
            <span>随手记IOS</span></a>
          </li>
        </ul>
      </div>
      </div>
      <div class="container2">
          <span>首页</span>
          <el-divider direction="vertical"></el-divider>
          <span>记账</span>
          <el-divider></el-divider>
      </div>
      <div class="container3">
        <p>深圳市铭数信息有限公司</p>
        <p>Copyright &copy;</p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
  .container{
    width: 1088px;
    margin: 0 auto;
    color: #fff;

    padding: 106px 0 0 22px;
    .container1{
      display: flex;
      .demo{
        flex: 1;
        h1{
          font-size: 18px;
        }
        ul{
          margin-top: 30px;
          margin-bottom: 50px;
          li{
            margin-top: 10px;
            a{
              color: #aaa;
              font-size: 14px;
            }
            a:hover{
              color: #fff;
            }
          }
        }
      }
      .demo5{
        flex: 2;
      }
    }
    .container2{
      text-align: left;
      color: #aaa;
      height: 70px;
      .el-divider{
        opacity: 0.5;
      }
      .el-divider--horizontal{
        width: 1066px;
      }
    }
    .container3{
      font-size: 12px;
      text-align: left;
      color: #aaa;
      p{
        margin: 6px 0;
      }
    }

  }
</style>
