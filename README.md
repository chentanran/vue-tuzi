# vue_tuzi

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#兔子商城项目

##项目准备

1.用到的工具有 vue-cli . 
2.项目依赖的框架 vue  mint-ui  mui

##头部和尾部制作

1.用 mint-ui 构建头部样式
2.用 mui 构建tabBar样式
    - 修改tabBar图标

##首页轮播图完成

- 用到了 mint-ui 的 Swipe 模块
- 通过 vue-resource 向后台接口发送 ajax 向后台获取图片和a链接的数据,渲染到页面上 

## 首页导航栏完成

- 使用 mui的 九宫格 样式

## 页面间过渡效果完成

- 通过 vue 的 transition 标签属性 使组件间切换有过渡的动画效果

## 页面抽离完成

- 将页面放到 page 文件夹
- 将头部和尾部放到 components 文件夹中
