import {postService} from 'web-toolkit/src/case-main/index';

export const Login = async (param: any) => {
  // const { data } = await postService('/rest/user/login', param);
  // 无接口时的模拟数据
  const data = {
    user: {
      id: 1,
      username: 'test',
      name: 'test',
      role: {
        id: 1,
        department: {
          id: 1,
        },
      },
      phone: '',
      extend: {},
    },
    token: 'test',
  };
  return data;
};

// export const LoginOut = async () => {
//   await postService(urlMap.logout.url);
// };
//
// export const UserUpdatePwd = async (params: any) => {
//   await postService(urlMap.pwd_update.url, params);
// };
//
// export const UserUpdateInfo = async (params: any) => {
//   await postService(urlMap.user_update_info.url, params);
// };
