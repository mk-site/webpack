//实现热更新方法二：
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path')
const merge = require('webpack-merge')
const config = merge(require('./webpack.config.js'))
const options = {
  contentBase: './dist',
  hot: true,
  inline:true,
  progress:true,
  quiet:true,
  port:9000,
  host: 'localhost'
}
webpackDevServer.addDevServerEntrypoints(config, options); //为devServer添加属性
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
server.listen(options.port, () => {
	console.log('dev server listening on port 5000');
});

//实现热更新方法三：
// const path = require('path')
// const express = require('express')
// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackConfig = require('./webpack.config.js')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const app = express()
// const compiler = webpack(webpackConfig)
// app.use(webpackDevMiddleware(compiler,{}))
// app.use(webpackHotMiddleware(compiler,{
//     log: false,
//     heartbeat: 1000
// }))
// app.use(express.static('./'))
// app.listen(webpackConfig.devServer.port,function(){
// 	console.log('启动 => start')
// })

// const webpackDevServer = require('webpack-dev-server');
// const options = {
//   contentBase: './dist',
//   hot: true,
//   inline:true,
//   progress:true,
//   quiet:true,
//   port:9000,
//   host: 'localhost'
// }
// webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
// const server = new webpackDevServer(compiler);
// server.listen(9000, () => {
// 	console.log('dev server listening on port 5000');
// });
