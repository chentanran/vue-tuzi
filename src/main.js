import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui头部
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//引入mui框架
import "./lib/mui/css/mui.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
