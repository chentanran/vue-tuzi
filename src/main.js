import Vue from 'vue'
import App from './App'
// import router from './router'
//引入路由模块
import vueRouter from "vue-router"
Vue.use(vueRouter)
//引入mint-ui头部
import { Header, Swipe,SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

//引入ajax
import VueResource from "vue-resource/dist/vue-resource.js"
Vue.use(VueResource)

//引入mui框架
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

//引入路由组件
import router from "./router/"

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
