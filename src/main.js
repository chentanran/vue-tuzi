import Vue from 'vue'
import App from './App'

//引入路由模块
import vueRouter from "vue-router"
Vue.use(vueRouter)

//引入mint-ui头部
import { Header, Swipe,SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//引入vue-resource
import VueResource from "vue-resource/dist/vue-resource.js"
Vue.use(VueResource)
Vue.http.options.root = "http://www.lovegf.cn:8899/"
//引入mui框架
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

//引入路由组件
import router from "./router/"

//引入时间格式化工具 moment
import moment from "moment"
//定义全局过滤器
Vue.filter("datastr",(value,datafmt = "YYYY-MM-HH hh:mm:ss")=>{
  return moment(value).format(datafmt)
})


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
