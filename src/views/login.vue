<template>
  <div class="flex column center login" v-loading="loading">
    <div class="login-body vivify popIn flex center column">
      <div class="login-head flex column center align-center">
        <div class="title1">{{loginTitle1}}</div>
        <div v-if="loginTitle2" class="title2">{{loginTitle2}}</div>
      </div>
      <div class="inner flex center align-center around">
        <div class="left">
          <img src="../assets/u90.png">
        </div>
        <div class="flex column right">
          <div class="flex center">
            <img :src="loginLogo"/>
          </div>
          <el-form
            label-position="left" label-width="70px"
            class="flex column around" ref="formRef" :model="form" :rules="rule">
            <el-form-item prop="username" label="账户：">
              <el-input v-model="form.username" autofocus autocomplete="off" placeholder="用户名" @keyup.enter.native="login($refs.formRef)" />
            </el-form-item>
            <el-form-item prop="pwd" label="密码：">
              <el-input type="password" autocomplete="off" v-model="form.pwd" placeholder="密  码" @keyup.enter.native="login($refs.formRef)" />
            </el-form-item>
            <kit-err-channel id="login" style="margin-bottom: 5px" />
            <el-form-item>
              <el-button type="primary" @click="login($refs.formRef)">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="login-support">技术支持：杭州领克信息科技有限公司</div>
  </div>
</template>
<script lang="ts">
import { ref, Ref, onMounted } from '@vue/composition-api';
import { ElForm } from 'element-ui/types/form';
import { useLoading } from 'web-toolkit/src/service';
import { postService, storeUserInfo, updateStoreUserInfo, submitErrChanel, pushMsgErr } from 'web-toolkit/src/case-main';
import {loginTitle1, loginTitle2, loginLogo, schema} from '@/config';
import {router} from '@/main';
import { Route } from 'vue-router';
import {assert} from 'web-toolkit/src/utils/index';
import {Login} from '@/dao/userDao';

export default {
  setup() {
    const loading = ref(false);
    const form = ref({ username: '', pwd: '' });
    const formRef: Ref<ElForm|null> = ref(null);
    const rule = {
      username: {
        required: true,
        message: '请填写用户名',
        trigger: 'none',
      },
      pwd: [{
        required: true,
        message: '请填写密码',
        trigger: 'none',
      }, {
        type: 'string',
        min: 6,
        message: '密码长度不能小于6位',
        trigger: 'none',
      }],
    };
    async function login() {
      const valid = await (formRef.value as ElForm).validate();
      assert(valid);
      submitErrChanel('login');
      const data = await Login({
        ...form.value,
        schema,
      });
      updateStoreUserInfo(data as any);
      // 设置登录后回到登录前页面
      // @ts-ignore
      const redirect: Route = {
        name: 'index',
        query: {},
      };
      if (
        storeUserInfo.redirect &&
        storeUserInfo.redirect.name &&
        storeUserInfo.redirect.name !== 'notFound' &&
        storeUserInfo.redirect.name !== 'login'
      ) {
        redirect.name = storeUserInfo.redirect.name;
        redirect.query = storeUserInfo.redirect.query;
      }
      // @ts-ignore
      storeUserInfo.redirect = redirect;
      router.push(redirect as any);
    }
    return {
      formRef, loginTitle1, loginTitle2, loginLogo,
      loading, form, rule, login: useLoading(loading, login),
    };
  },
};
</script>
<style lang="scss" scoped>
  .login{
    background: url("../assets/bg.jpg") no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
  }
  .login-body {
    width: 90vw;
    height: 90vh;
    min-height: 400px;
    .login-head{
      color: white;
      .title1{
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .title2{
        font-size: 1.8rem;
        margin-bottom: 2rem;
      }
    }
    .inner{
      width: 100%;
      max-height: 600px;
      max-width: 1000px;
      background: white;
      padding: 2rem 2rem;
      box-shadow: 3px 3px 10px rgba($color: #000, $alpha: .5);
      border-radius: 10px;
      font-size: 1rem;
      .left{
        img{
          height: 40vh;
        }
      }
      .right{
        width: 300px;
        img{
          height: 3.8rem;
          width: auto;
          margin-bottom: 3rem;
        }
        .el-input{
          width: 230px;
        }
        .el-button{
          width: 230px;
          font-weight: 600;
          margin: 0 auto;
        }
      }

    }
  }
  .login-support{
    /*margin-top: 3vh;*/
    color: #fff;
    width: 100%;
    font-weight: 700;
    font-size: 1.1rem;
    text-align: center;
  }
</style>
