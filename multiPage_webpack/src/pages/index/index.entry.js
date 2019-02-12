import './css/index.scss'
import $ from 'jquery'
import config from '@/config'
// const config = () => import(/* webpackChunkName: 'config' */ '@/config')
console.log('index,entry')
console.log('123444445555')
$('#index').click(() => {
  console.log(config.test())
  $('#index').html(config.test())
})
