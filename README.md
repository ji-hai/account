
安装：yarn

代码整齐：yarn lint

运行dev：yarn dev.demo

更新web-toolkit: yarn core

1. `::v-deep` 解决element中样式的优先级
2. 解决element路由跳转重复报错的问题

   在new之前

     `
      const resolveOriginal = VueRouter.prototype.push
      VueRouter.prototype.push = function push(location:any) {
        return (resolveOriginal.call(this, location) as any).catch((err:any) => err)
      }
      `
3.

4.
