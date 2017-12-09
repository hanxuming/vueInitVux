// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  //npm  build运行 生产环境=======打包部署=======请求生产环境数据库
  build: {
    // env: {require('./prod.env'),
    env:{   NODE_ENV: '"production"'},
    index: path.resolve(__dirname, '../mpoin/index.html'),
    assetsRoot: path.resolve(__dirname, '../mpoin'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  //historyWeather访问者代理   http://v.juhe.cn/
  /****
   * 
   * 
    '/historyWeather': {
     target: 'http://v.juhe.cn/',
      changeOrigin: true,
       pathRewrite: {
      '^/historyWeather': '/historyWeather'
    }
  },
  '/catering': {
     target: 'http://apis.juhe.cn/',
      changeOrigin: true,
       pathRewrite: {
      '^/catering': '/catering'
    }
  },
  '/oil': {
     target: 'http://apis.juhe.cn/',
      changeOrigin: true,
       pathRewrite: {
      '^/oil': '/oil'
    }
  }
   */
  dev: {
    env:  {NODE_ENV: '"development"'},
    port: 8888,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {  
      
    },
    /*proxyTable: {
    '/historyWeather': {
     target: 'http://v.juhe.cn/',
      changeOrigin: true,
       pathRewrite: {
      '^/historyWeather': '/historyWeather'
    }
  }
    },*/
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
