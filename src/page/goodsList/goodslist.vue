<template>
   <div class="goodslist-contain">
       <div class="goodslist">
        <div class="list" v-for="(item) in list" :key="item.id" @click="getinfo(item.id)">
           <img :src="item.img_url" alt="">
           <h3>{{item.title}}</h3>
            <p class="price"><span class="prive-old">¥ {{item.sell_price}}</span><span class="price-new">¥ {{item.market_price}}</span></p>
            <p class="res"><span class="hot">热卖中</span><span class="number">剩{{item.stock_quantity}}件</span></p>
       </div>
       </div>
       <mt-button size="large" class="btn" @click="getgoodslist(pageindex++)">获取更多数据</mt-button>
   </div>
</template>

<script>
 import { Toast } from "mint-ui"

export default {
    data(){
        return {
            pageindex : 1,
            lists: [
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
            ],
            list: []
        }
    },
    created(){
        this.getgoodslist();
    },
    methods:{
        //获取商品列表数据
        getgoodslist(){
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(res=>{
                if(res.body.status == 0){
                    res.body.message.forEach((element,i) => {
                        element.img_url = this.lists[i]
                    });
                    this.list = this.list.concat(res.body.message);
                }else{
                    Toast("数据获取失败")
                }
               
            })
        },
        //路由跳转
        getinfo(id){
           // 命名的路由
            this.$router.push({ name: 'goodsinfo', params: { id }})
        }
        
    }
}
</script>

<style lang="less">
    .goodslist-contain{
        .goodslist{
            display: flex;
            flex-wrap: wrap;
            padding: 8px;
            // flex-direction: column;
            justify-content: space-between;
            .list{
                border: 1px solid orange;
                margin-bottom: 10px;
                box-shadow: 0 0 6px orange;
                width: 49%;
                display: flex;
                flex-direction: column;
                
                img{
                    width: 100%;
                }
                h3{
                    flex: 1;
                    font-size: 17px;
                    padding: 4px;
                    color: orange;
                }
                .price{
                    padding: 4px;
                     margin-bottom: 3px;  
                    .prive-old{
                        font-size: 17px;
                        color: orange;
                        margin-right: 5px;
                    }
                    .price-new{
                        text-decoration: line-through;
                    }
                }
                .res{
                     padding: 4px;
                     display: flex;
                     justify-content: space-between;
                     
                }
            }
        }
        .btn{
            border: 1px solid orange;
            color: orange;
        }
    }
</style>
 