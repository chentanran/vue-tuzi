
import Router from 'vue-router'

//首页路由
import home from "../page/home"
import member from "../page/member"
import search from "../page/search"
import shopcar from "../page/shopcar"

export default new Router({
  routes: [
    {path: "/home", component: home},
    {path: "/member", component: member},
    {path: "/search", component: search},
    {path: "/shopcar", component: shopcar},
    {path: "/", redirect: "/home"}
  ],
  linkActiveClass: "mui-active"
})
