<template>
    <div class="photolist-contain"> 
        <!-- tab栏  -->
        <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="{'mui-control-item': true, 'mui-active':item.id == 0 }" href="javascript:;" data-wid="tab-top-subpage-1.html" v-for="(item) in list" :key="item.id" @click="getPhotoList(item.id)">
							{{item.title}}
						</a>
					</div>
				</div>
			</div>
        <!-- 图文列表 -->
        <div class="photolist">
            <ul>
                <router-link tag="li"  :to="'/home/photoinfo/'+item.id" v-for="(item,index) in photolist" :key="item.id">
                    <img :src="photoimg[index]"  v-lazy="photoimg[index]">
                    <div class="photolist-content">
                        <h3>{{item.title}}</h3>
                        <p>{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
//arguments callee caller 在严格模式中无法使用 webpack 默认启动严格模式
//可以忽略 严格 模式
    import mui from "../../lib/mui/js/mui.js"
    import {Toast} from "mint-ui"

export default {
    data(){
        return {
            list : [],
            listDatas : {},
            photolist:[],
            photoimg: [
                "https://i03picsos.sogoucdn.com/99e64c6e4463a712",
                "https://i04picsos.sogoucdn.com/1e773bd800395ee6",
                "https://i04picsos.sogoucdn.com/c0fc6cdd5d0d125e",
                "https://i04picsos.sogoucdn.com/b5499e174d78c20d",
                "https://i01picsos.sogoucdn.com/3cc3ea40f16b965e"
            ],
            items: "https://i04picsos.sogoucdn.com/1e773bd800395ee6"
        }
    },
    created(){
        this.getBarList();
        this.getPhotoList(0)
    },
    mounted(){
        mui('body').on('click','a',function(){document.location.href=this.href});
         mui('.mui-scroll-wrapper').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        //获取tab栏数据
        getBarList(){
            this.$http.get("api/getimgcategory").then(res=>{
                // console.log(res);
                if(res.body.status == 0){
                    this.list = res.body.message;
                    this.listDatas = {title: "全部", id: 0};
                    this.list.unshift(this.listDatas);
                }else{
                    Toast("数据获取失败")
                }
            })
        },
        //获取图文列表
        getPhotoList(id){
            this.$http.get("api/getimages/"+id).then(res=>{
                // console.log(res);
                if(res.body.status == 0){
                    this.photolist = res.body.message;
                }else{
                    Toast("数据获取失败,请重试")
                }
            })
        }

    }
}
</script>

<style lang="less">
    .photolist-contain{
        .photolist{
             list-style: none;
            ul{
                padding: 5px;
                margin: 0;
                list-style: none;
                li{
                    position: relative;
                    list-style: none;
                    img{
                        width: 100%;
                        height: 300px;
                    }
                    img[lazy="loading"] {
                        width: 40px;
                        height: 300px;
                        margin: auto;
                        // background: url("https://i04piccdn.sogoucdn.com/24e177d802c60af9") no-repeat fixed center;
                        }
                    .photolist-content{
                        position: absolute;
                        bottom: 0;
                        height: 90px;
                        overflow: hidden;
                        h3{
                            color: orange;
                            font-size: 14px;
                        }
                        p{
                            color: hotpink;
                        }
                    }
                }
            }
        }
    }
</style>
    