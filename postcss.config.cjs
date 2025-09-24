module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['van-'],
      replace: true,
      mediaQuery: false // 是否在媒体查询的css代码中也进行转换
    },
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7'],
    },
  },
}
