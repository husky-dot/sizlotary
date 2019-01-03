const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        'NODE': resolve('node_modules'),
        '@views': resolve('src/views'),
        '@pic': resolve('src/assets/images'),
        '@styles': resolve('src/assets/styles'),
        '@components': resolve('src/components')
      }
    }
  },
  chainWebpack: webpackConfig => {
    webpackConfig.plugins.delete('prefetch')
    webpackConfig.module
      .rule('vue')
      .test(/\.vue$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        compilerOptions: {
          preserveWhitespace: true
        }
      })
  },
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    extract: false
  }
}
