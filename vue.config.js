// 这里是在编译时执行
const theme = process.env.VUE_APP_APP_THEME || 'theme_dark';
const webpackExternals = process.env.NODE_ENV==='production' ? {
  'vue': 'Vue',
  'element-ui': 'ELEMENT',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'qs': 'Qs',
} : {};
module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  configureWebpack: {
    entry: process.env.ENTRY,
    externals: {},
  },
  devServer:{
    port: 8888
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "node_modules/web-toolkit/src/scss/color.scss";
          @import "node_modules/web-toolkit/src/scss/${theme}.scss";
        `
      }
    }
  },
  // for vue-echarts
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  // web-bundle-analyzer: https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin
  pluginOptions: {
    // webpackBundleAnalyzer: {
    //   openAnalyzer: false,
    //   // server(dev), static(product), disabled。需要时用server
    //   analyzerMode: 'disabled',
    // }
  }
  // pages:{
  //   index: 'src/main.js',
  // }
}
