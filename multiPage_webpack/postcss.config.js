module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-cssnext': {
        warnForDuplicates:false
    },
    'cssnano': { //压缩、去除写法不好的代码，浏览器支持更好的代码
        safe: true
    }
  }
}