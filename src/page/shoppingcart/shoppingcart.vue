<template>
    <div class="shoppingcart-contain">
        <div class="list">
            <mt-switch v-model="value" class="btn"></mt-switch>
            <div class="img">
            <img src="https://img01.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fimg02.sogoucdn.com%2Fapp%2Fa%2F100520093%2F3c379158be312928-a619adfd1352aaf3-5dad301635ecf4345542036447d5dcbf.jpg&appid=122" alt="">
        </div>
        <div class="part">
            <h3>小米就是好啊 啊</h3>
            <div class="price">
                <span>¥2199</span>
                <div class="number">
                    <span @click="sub">-</span>
                    <input type="text"  v-model="num" ref="num">
                    <span @click="add">+</span>    
                </div>
                <a href="javascript:;" class="del">删除</a >
            </div>
            
        </div>
        </div>
       <div class="close">
           <div class="left">
               <p>总计(不含运费)</p>
               <p>已勾选商品0件,总价: ¥0</p>
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
            value : true
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
                // text-align:center;
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
                        font-size: 18px;
                        height: 30px;
                    }
                .price{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                   
                    .number{
                    margin-left: 20px;
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
                }
               
            }
        }
        .close{
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
