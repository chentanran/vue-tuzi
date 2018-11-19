
import Router from 'vue-router'

//首页路由
import index from "../page/index"

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    }
  ]
})
