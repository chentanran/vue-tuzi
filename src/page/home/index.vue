<template>
        
    <div class="home_contain">
    
        <!-- 轮播图板块 -->
       <mt-swipe class="home_swipe">
            <mt-swipe-item v-for="(item, i) in datas" :key="i">
                 <a :href="item.url">
                     <img :src="item.img" alt="">
                 </a>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/home/newsList">
		                    <img src="../../image/img/menu1.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">新闻列表</div></a></li>
                        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#/home/photoList">
		                    <img src="../../image/img/menu2.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">图文列表</div></a></li>
                              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/img/menu3.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">Home</div></a></li>
                              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/img/menu4.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">Home</div></a></li>
                              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/img/menu5.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">Home</div></a></li>
                              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/img/menu6.png" class="mui-icon mui-icon-home">
		                    <div class="mui-media-body">Home</div></a></li>

		        </ul> 

    </div>
  
</template>

<script>
    import headers from "../../components/header/header.vue"
    import { Toast } from 'mint-ui'

    export default {
        components:{
            headers
        },
        data(){
            return {
                 datas: null
            }
        },
        created(){
            this.banner();
        },
        methods:{
            banner(){
                this.$http.get("api/getlunbo").then(res => {
                    let result = res.body;
                    if(result.status == 0){
                    this.datas = result.message;
               }else{
                  Toast("数据获取失败")
               }
            })
            }
        }
    }
</script>

<style lang="less">
    .home_contain{
        background-color: #fff;
        .home_swipe{
        height: 200px;
        background-color: skyblue;
           a{
               display: block;
               height: 100%;
               width: 100%;
               img{
                   display: block;
                   height: 100%;
                   width: 100%;
               }
           } 
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        .mui-table-view-cell{
            border: none;
          
                .mui-icon{
                    height: 60px;
                    width: 60px;
                }
            }
       
    }
    }
   
</style>