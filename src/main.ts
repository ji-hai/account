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

Vue.prototype.formatNumber= function(value:any){
  if(!value) return '0.00';
  // 小数点位数
  let decimal:number = 2;
  // 实数部分
  let intPart = Math.trunc(Number(value)).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g,',');
  // 判断小数点位数
  if(/(?<=\.)\d*$/g.test(value.toString())){
    let valueLength = value.toString().match(/(?<=\.)\d*$/g)[0].length;
    if(valueLength != decimal){
      //匹配小数点和其后面所有数字，然后在后面填充0
      value = value.toString().replace(
        /\..*$/,
        `.${value.toString().match(/(?<=\.)\d*$/g)[0].padEnd(decimal,"0")}`
      );
    }else {
      return value;
    }
  }else {
    if(value != '' || value != 0){
      value = `${intPart}.${new Array(decimal).fill("0").join("")}`;
    }
  }
  return value
}

const vm = new Vue({
  router,
  render: (h) => h(App),
})
// 可用于延迟加载
vm.$mount('#app');
