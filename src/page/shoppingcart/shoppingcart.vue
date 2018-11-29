<template>
    <div class="shoppingcart-contain">
        <div class="list" v-for="(item) in goodslist" :key="item.id">
            <mt-switch :value="$store.getters.getSelect[item.id]" 
            @change="selectData(item.id,$store.getters.getSelect[item.id])"  class="btn" ></mt-switch>
            <div class="img">
            <img src="https://img01.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520093%2F3c379158be312928-a619adfd1352aaf3-5dad301635ecf4345542036447d5dcbf.jpg&appid=122" alt="">
            </div>
        <div class="part">
            <h3>{{item.title}}</h3>
            <div class="price">
                <span>¥{{item.sell_price}}</span>
                <div class="number">
                    <span @click="decrease(item.id)">-</span>
                    <input type="text"  :value="$store.getters.getGoodsCount[item.id]">
                    <span @click="increase(item.id)">+</span>    
                </div>
                <a href="javascript:;" class="del" @click="delData(item.id)">删除</a >
            </div>
            
        </div>
        </div>
       <div class="close">
           <div class="left">
               <p>总计(不含运费)</p>
               <p>已勾选商品件{{$store.getters.getCountAndPrice.num}},总价: ¥ {{getprices}}</p>
           </div>
           <div class="right">
               <mt-button type="primary" size="normal">去结算</mt-button>
           </div>
       </div>
    </div>   
</template>

<script>
export default {
    data(){
        return {
            value : true,
            price : 0,
            goodslist : []
        }
    },
    created(){
        this.getshopcar()
       
        
    },
    mounted(){
        //  this.getPrice()
    },
    updated(){
      
        this.$store.commit("select", this.value)
       //获取价格
      
    },
    methods:{
        //获取id对应的商品
        getshopcar(){
            let newArr = [];
            //获取保存的商品id
           this.$store.state.car.forEach(res=>{
               newArr.push(res.id)
           })
            this.$http.get("api/goods/getshopcarlist/"+ newArr.join(",")).then(res=>{
                if(res.body.status == 0){
                    this.goodslist = res.body.message;
                    // this.getPrice()
                }
            })
        },
        //减少数据
        decrease(id){
            //  this.goodslist.forEach(item => {
            //     if(item.id == id){
            //         this.price -= item.sell_price
            //     }
            // })
            this.$store.commit("decrease", id)
        },
        //添加数据
        increase(id){
            // this.goodslist.forEach(item => {
            //     if(item.id == id){
            //         this.price += item.sell_price
            //     }
            // })

             this.$store.commit("increase", id)
        },
        // 删除id对应的商品信息
        delData(id){
            for(var i = 0; i < this.goodslist.length; i++){
                if(this.goodslist[i].id == id){
                    this.goodslist.splice(i,1);
                }
            }
            this.$store.commit("delData", id)
        },
        //选择按钮
        selectData(id, val){
           this.$store.commit("selectData",{id :id, val : val})
        },
        // getPrice(){
        //       //获取价格
        //     this.goodslist.forEach(item => {
        //         this.price += item.sell_price * (this.$store.getters.getGoodsCount[item.id])
                
        //      })
        // }
    },
    computed:{
       getprices(){
           let arr = []
           let a = 0;
            this.goodslist.forEach(item => {
                if(this.$store.getters.getSelect[item.id]){
                    this.price = item.sell_price * (this.$store.getters.getGoodsCount[item.id])   
                    // arr.push(this.price)
                    a+= this.price
                }

         })
            // let a = 0;
            // for(let i = 0; i < arr.length; i++){
            //    a += arr[i]
            // }
          return a
       }
      
    }
}
</script>

<style lang="less">
    .shoppingcart-contain{
        .list{
            display: flex;
            padding: 10px 20px; 
            .btn{
                flex: 1;
            }
            .img{
               flex: 1;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .part{
                flex: 3;
                // display: flex;
                 padding-left: 10px;
                h3{
                        font-size: 15px;
                        height: 30px;
                    }
                .price{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    >span{
                        // margin-left: 20px;
                    }
                .number{
                    margin-left: 5px;
                    display: flex;
                    width: 100px;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 30px;
                    //  text-align:center;
                    span{
                       flex: 1; 
                       height: 30px;
                       background-color: orange;
                    }
                    input{
                        flex: 1;
                        padding: 0;
                        margin: 0;
                        height: 30px;
                        text-align:center;
                    }
                   
                }
                    a{
                        font-size:13px;
                    }
                }
               
            }
        }
        .close{
            margin-top: 20px; 
           display: flex;
           padding: 20px;
           justify-content: space-between; 
           align-items: center;
           .left{
                p{
                    font-size: 16px;
                }
              
           }
        }
    }
</style>
