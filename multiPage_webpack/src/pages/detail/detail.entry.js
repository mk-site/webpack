import './css/detail.scss'
import $ from 'jquery'
import config from '@/config'
console.log('detail,entry')
$('#detail').click(() => {
  console.log(config.test())
  $('#detail').html(config.test())
})
