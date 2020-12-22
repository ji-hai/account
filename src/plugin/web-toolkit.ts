import {ComponentName, registerComponent} from 'web-toolkit/src/components/use';

// scss
import 'web-toolkit/src/scss/common.scss';
import 'web-toolkit/src/scss/vivify.scss';
// 注意加载顺序
import 'web-toolkit/src/plugins';
import 'web-toolkit/src/case-main';
import 'web-toolkit/src/filter/date-time';
// 重载
import {AxiosInterceptConfig, RouteInterceptConfig} from 'web-toolkit/src/case-main';
import Qs from 'qs';
import {storeUserInfo, submitErrChanel} from 'web-toolkit/src/case-main/store/index';
// import {DepartmentAdmin} from "@/model/department";
// @ts-ignore
import NProgress from 'nprogress';
import {Route} from "vue-router";

registerComponent(ComponentName.Table);
registerComponent(ComponentName.DatePicker);
registerComponent(ComponentName.DialogSimple);
registerComponent(ComponentName.Tip);
registerComponent(ComponentName.ErrChannel);
registerComponent(ComponentName.Empty);

AxiosInterceptConfig.requestPartFunc = function(config) {
  if (!(config.data instanceof FormData)) {
    const data = Qs.parse(config.data);
    data.token = storeUserInfo.token;
    data._schema = process.env.VUE_APP_LOGIN_SCHEMA;
    config.data = Qs.stringify(data);
  } else {
    config.data.append('token', storeUserInfo.token as any);
    config.data.append('_schema', process.env.VUE_APP_LOGIN_SCHEMA);
  }
};
// RouteInterceptConfig.beforePartFunc = function (to: Route, from: Route, next: any){
//   if (to.name !== from.name && process.env.VUE_APP_REQUEST_MODE !== 'display') {
//     NProgress.start();
//   }
//   if (!storeUserInfo.token) {
//     storeUserInfo.token="local"
//     storeUserInfo.user = {
//       id: 0,
//       username: '管理员',
//       name: '管理员',
//       role:{
//         department:{
//           id: DepartmentAdmin
//         }
//       }
//     } as any
//     // initStoreUserInfo();
//   }
//   // 初始化err-msg-channel
//   submitErrChanel('');
//   // 指定默认第一个路由
//   // if (to.name === storePageMenuOption.indexName) {
//   //   const menu = getMainRoute();
//   //   if (menu) { next(menu); }
//   // }
//   next();
// }
