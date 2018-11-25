<template>
    <div class="goodsinfo-contain">
        <!-- 轮播图 -->
        <swiper :datas="lists" :img="img"></swiper>  
        <!-- 购物板块 -->
        <div class="addshop">
            <h3>{{contentData.title}}</h3>
            <div class="addcart">
                <p class="price"><span class="market-price">市场价: <i>¥{{contentData.market_price}}</i></span><span class="sales-price">销售价: <i>¥{{contentData.sell_price}}</i></span></p>
                <div class="size">
                <span class="">购买数量:</span>
                <number :number="contentData.stock_quantity" @getnumber="getnumber"></number>
                </div>

                    <mt-button size="normal" class="btn-left">立即购买</mt-button>
                    <mt-button size="normal" class="btn-right" @click="show = !show">加入购物车</mt-button>
            </div>
        </div>
        <!-- 商品参数页 -->
        <div class="parameter">
            <h3>商品参数</h3>
            <div>
                <p>商品货号: {{contentData.goods_no}}</p>
                <p>库存情况: {{contentData.stock_quantity}}</p>
                <p>上架时间: {{contentData | datastr}}</p>
            </div>
            <mt-button type="primary" size="large" plain class="btn" @click="toGoodsDesc(contentData.id)">图文详情</mt-button>
            <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
        <!-- 小球 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
             <div class="ball" v-show="show"></div>
        </transition>
      
    </div>
</template>

<script>
import swiper from "../../components/swiper/swiper.vue"
import number from "../../components/goodsinfo_number/goodsinfo_number.vue"

export default {
    components:{
        swiper,
        number
    },
    data(){
        return {
            id: this.$route.params.id,  //url的id
            list: [   //替换图片
                    "https://res.vmallres.com/pimages//sale/2018-11/EuEf79zv7sVlkzmy4Cp5.png",
                    "https://res.vmallres.com/pimages//sale/2018-11/TYINij3F0AvmoQLINPCm.png",
                    "https://res.vmallres.com/pimages//sale/2018-11/W3o2hEvi6wk5455V8vZy.png",
                    "http://p19.qhimgs3.com/dr/240_240_/t01884c5e09d11b6e17.jpg",
                    "http://p0.so.qhmsg.com/bdr/_240_/t01e4565794feef926f.jpg"
            ],
            lists : [], //列表数据
            img : false, //子组件传值, 改变图片宽度
            contentData: [],  //商品参数数据
            show : false,  // 控制小球显示影藏
            ball : "", //小球
            x: null,// 小球坐标
            y: null,
            // num: null, //商品数量
            dots: "", //获取点的Dom元素
            num : 1, //选择商品数量 
        }
    },
    created(){
        this.getimg()
        this.getContent()
       
    },
    mounted(){
         this.dots = document.querySelector(".mui-badge")
    },
    methods:{
        //轮播图图片
        getimg(){
            this.$http.get("api/getthumimages/"+ this.id).then(res=>{
                // console.log(res)
                if(res.body.status == 0){
                    res.body.message.forEach((item,i)=>{
                        item.img = this.list[i]
                    })
                    this.lists = res.body.message;
                    // console.log(this.lists)
                }
            })
        },
        //商品详情数据
        getContent(){
            this.$http.get("api/goods/getinfo/" + this.id).then(res=>{
           
                if(res.body.status == 0){
                   this.contentData = res.body.message[0];
             
                }else{
                    alert("获取数据失败")
                }
            })
        },
        // 跳转商品图文介绍页
        toGoodsDesc(id){
            this.$router.push({path: `/home/goodsdesc/${this.id}`})

        },
        //
        getnumber(num){
            // console.log(num)
            this.num = num.num;
        },
        //小球动画
       
         beforeEnter: function (el) {
           
            
            el.style.transform = "translate(0,0)"
            el.style.opacity = "1"
            
         },
         enter: function (el, done) {
            //  this.dots.innerText = 0
             this.dots.innerText =  parseInt(this.dots.innerText) + parseInt(this.num);
            //  console.log(this.dots.innerText)
             //获取小球的位置
            this.x = document.querySelector(".ball").getBoundingClientRect().left;
            this.y = document.querySelector(".ball").getBoundingClientRect().top;
            //获取小圆点的位置
            // var dot = document.querySelector(".mui-badge").getBoundingClientRect();
            var dot = this.dots.getBoundingClientRect();
            var a = dot.left - this.x;
            var b = dot.top - this.y;
       
            el.offsetWidth;

                el.style.transform = `translate(${a}px,${b}px)`
                el.style.transition = "all 2s cubic-bezier(0,.41,1,.46)"
           
            done()
            },
        afterEnter: function (el) {
           
            this.show = !this.show
        },
    }
}
</script>

<style lang="less">
    .goodsinfo-contain{
        position: relative;
        .addshop{
            margin: 10px 10px;
            // border
            h3{
                color: #666;
                // line-height: 50px;
                height: 50px;
                line-height: 20px;
                border-bottom: 1px solid #ccc;
                font-size:18px;
            }
            .price{
                margin-top: 20px;
                color: #333;
                font-size: 14px;
                .market-price{
                    margin-right: 20px;
                    i{
                         text-decoration: line-through;
                    }
                }
                .sales-price{
                   i{
                       color: orange;
                   }
                }
            }
            .size{
                display: flex;
                line-height: 30px;
                margin-bottom: 10px;
               
            }
            .btn-left{
                background-color: skyblue;
                color: white;
            }
            .btn-right{
                background-color: purple;
                color: white;
            }
        }
        .parameter{
            margin: 20px 10px;
            border-top: 1px solid #ccc;
            h3{
                font-size: 18px;
                line-height: 40px;
            }
            .btn{
                margin-bottom: 10px;
            }
        }
        .ball{
            height: 15px;
            width: 15px;
            background-color: orange;
            border-radius: 50%;
            position: absolute;
            left: 147px;
            top: 318px;
            z-index:100;
        }
    }
</style>
