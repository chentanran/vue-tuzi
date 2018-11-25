
import Router from 'vue-router'

//首页路由
import home from "../page/home"
import member from "../page/member"
import search from "../page/search"
import shopcar from "../page/shopcar"
import newsList from "../page/newsList/newsList.vue"
import newsInfo from "../page/newsInfo/newsinfo.vue"
import photolist from "../page/photoList/photolist.vue"
import photoinfo from "../page/photoInfo/photoinfo.vue"
import goodsList from "../page/goodsList/goodslist.vue"
import goodsinfo from "../page/goodsinfo/goodsinfo.vue"
import goodsdesc from "../page/goodsdesc/goodsdesc.vue"

export default new Router({
  routes: [
    {path: "/home", component: home},
    {path: "/member", component: member},
    {path: "/search", component: search},
    {path: "/shopcar", component: shopcar},
    {path: "/", redirect: "/home"},
    {path: "/home/newslist", component: newsList},
    {path: "/home/newsinfo/:id", component: newsInfo},
    {path: "/home/photolist", component: photolist},
    {path: "/home/photoinfo/:id", component: photoinfo},
    {path: "/home/goodslist", component: goodsList},
    {path: "/home/goodsinfo/:id", component: goodsinfo, name: "goodsinfo"},
    {path: "/home/goodsdesc/:id", component: goodsdesc, name: "goodsdesc"}
  ],
  linkActiveClass: "mui-active"
})
