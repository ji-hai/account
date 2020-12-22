
import { PRIVILEGE } from '@/types/privilege';

const demo1 = {
  path: '/demo1',
  name: 'demo1',
  alias: "",
  component: () => import('../views/demo1/demo1.vue'),
  meta: {
    // privileges: [PRIVILEGE.USER_MNG, PRIVILEGE.USER_LIST],
    CName: 'Demo1-subtitle',
    parentCName: 'Demo1',
  },
};
const demo2 = {
  path: '/demo2',
  name: 'demo2',
  component: () => import('../views/demo2/demo2.vue'),
  meta: {
    CName: 'Demo2-subtitle',
    parentCName: 'Demo2',
  },
};
const demo3 = {
  path: '/demo3',
  name: 'demo3',
  component: () => import('../views/demo3/demo3.vue'),
  meta: {
    CName: 'Demo3-subtitle',
    parentCName: 'Demo3',
  },
};
const demo4 = {
  path: '/demo4',
  name: 'demo4',
  component: () => import('../views/demo4/demo4.vue'),
  meta: {
    CName: 'Demo4-subtitle',
    parentCName: 'Demo4',
  },
};
const demo5 = {
  path: '/demo5',
  name: 'demo5',
  component: () => import('../views/demo5/demo5.vue'),
  meta: {
    CName: 'demo5',
    parentCName: 'Demo5',
  },
};
const demo6 = {
  path: '/demo6',
  name: 'demo6',
  component: ()=> import('../views/demo6/demo6.vue'),
  meta: {
    CName: 'demo6',
    parentCName: 'Demo6',
  },
};
const mobiledemo1 = {
  path: '/mobile/mobiledemo1',
  name: 'mobiledemo1',
  component: () => import('../views-mobile/demo1.vue'),
  meta: {
    title: 'demo1',
    authDisabled:true,
  },
};

//手机端
const mobiledemo2 = {
  path: '/mobile/mobiledemo2',
  name: 'mobiledemo2',
  component: () => import('../views-mobile/demo2.vue'),
  meta: {
    title: 'demo2',
    authDisabled:true,
  },
};
const mobiledemo3 = {
  path: '/mobile/mobiledemo3',
  name: 'mobiledemo3',
  component: () => import('../views-mobile/demo3.vue'),
  meta: {
    title: 'demo3',
    authDisabled:true,
  },
};
const mobiledemo4 = {
  path: '/mobile/mobiledemo4',
  name: 'mobiledemo4',
  component: () => import('../views-mobile/demo4.vue'),
  meta: {
    title: 'demo4',
    authDisabled:true,
  },
};


// 按顺序 用于菜单的排列
// const indexChildren = [
//   demo1,
//   demo2,
//   demo3
// ];

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: { authDisabled: true },
  },
  {
    path: '/mobile',
    name: 'mobile-index',
    // redirect: {name:"mobile-login"},
    component: () => import('../views-mobile/index.vue'),
    children: [
      mobiledemo1,mobiledemo2,mobiledemo3,mobiledemo4
    ],
    meta: { authDisabled: false },
  },
  {
    path: '/',
    name: 'index',
    redirect: 'index-page',
    component: () => import('../views/main/index.vue'),
    children: [
      demo1, demo2, demo3, demo4, demo5,
      {
        path: '*',
        name: '404_child',
        component: () => import('../component/page404.vue'),
        meta: { authDisabled: true },
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: () => import('../component/page404.vue'),
    meta: { authDisabled: true },
  },

];
