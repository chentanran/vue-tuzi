<template>
    <div class="newlist-contain">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in datas" :key="item.id" >
					<a :href="'#/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="../../image/img/menu4.png">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>时间: {{item.add_time | datastr}}</span>
                                <span>点击: {{item.click}}</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
    </div>    
</template>

<script>
    import { Toast } from "mint-ui"

export default {
    data(){
        return {
            datas : ""
        }
    },
    created(){
        this.getNewListData();
       
    },
    methods:{
        getNewListData(){
            this.$http.get("api/getnewslist").then(res=>{
                if(res.body.status == 0){
                    this.datas = res.body.message;
                }else{
                    Toast("数据获取失败")
                }
            })
        }
    }
}
</script>

<style lang="less">
    .newlist-contain{
        .mui-table-view{
            .mui-media-body{
                // text-align: center;
                text-overflow: ellipsis;
                p{
                display: flex;
                justify-content: space-between;
                margin-top: 3px;
            }
            }
           
        }
    }
</style>

