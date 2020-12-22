import Vue from 'vue';
import App from './App.vue';

//
// //echats图表
// import echarts from 'echarts/lib/echarts';
// //
// Vue.prototype.$echarts = echarts;


// 加载所用组件，含core
import './plugin';
import { axiosIntercept, routeIntercept, buildMenu} from 'web-toolkit/src/case-main';
import { mainMenuTitles } from './config';
import './scss/common.scss';
import { routes } from './router/routes';
import { genRouter } from 'web-toolkit/src/case-main/router';

export const router = genRouter(routes);
buildMenu(routes, mainMenuTitles);
routeIntercept(router);
axiosIntercept(router);
//字体图标
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon',Icon)
const vm = new Vue({
  router,
  render: (h) => h(App),
});
// 可用于延迟加载
vm.$mount('#app');
