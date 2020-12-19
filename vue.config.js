/* eslint-disable */

// vue.config.js

// 引入path模块
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/13-money-website/'
    : '/',

  // chainWebpack 链式语法
  chainWebpack: config => {
    // 定位存放svg的目录
    const dir = path.resolve(__dirname, 'src/assets/icons')
    // 所有目标svg文件的匹配规则
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      // Rule 条件，只有这个目录下的svg文件才会使用这个rule
      .include.add(dir).end()
      // 使用的loader即loader的选项,chainwebpack中.use().loader()传入的内容都是一样的
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract: false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options=>({...options,plugins:[{removeAttrs:{attrs:'fill'}}]})).end()

    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'), [{plainSprite: true}])
    // 这个目录下的文件的不再匹配svg规则
    config.module.rule('svg').exclude.add(dir)
  }
}