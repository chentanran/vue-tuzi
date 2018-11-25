<template>
    <div class="photoinfo-contain">
        <div class="headers">
            <h3>{{datas.title}}</h3>
            <p>
                <span>发表时间: {{datas.add_time | datastr}}</span>
                <span>点击: {{datas.click}}次</span>
            </p>
        </div>
        <hr>
        <div class="content">
           <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
            <p v-html="datas.content"></p>
        </div>

        <!-- 引入评论列表 -->
        <comment></comment> 
    </div>
</template>

<script>
import comment from "../../components/comment/comment.vue"

export default {
    components:{
        comment
    },
    data(){
        return {
            id: this.$route.params.id,
            datas: [],
            list: [{
                  src: 'http://img5.imgtn.bdimg.com/it/u=2771553541,2451896810&fm=26&gp=0.jpg',
                   w: 600,
                   h: 400
                   }, {
                    src: 'http://img5.imgtn.bdimg.com/it/u=546297670,1725292951&fm=11&gp=0.jpg',
                    w: 600,
                    h: 400
                    }, {
                    src: 'http://img1.imgtn.bdimg.com/it/u=3041164106,3667199823&fm=26&gp=0.jpg',
                    w: 600,
                    h: 400
                    }]
        }
    },
    created(){
        this.getphotoinfo();
    },
    methods:{
        //获取内容
        getphotoinfo(){
            // console.log(this.$route.params.id)
            this.$http.get("api/getimageInfo/"+ this.id).then(res=>{
                // console.log(res)
                if(res.body.status == 0){
                    this.datas = res.body.message[0];
                }
            })
        }
      
    }
}
</script>

<style lang="less">
    .photoinfo-contain{
        .headers{
            margin: 10px;
            h3{
                text-align: center;
                color: orange;
            }
            p{
                display: flex;
                justify-content:space-between;
            }
        }
        .content{
            padding: 10px;
            img{
                width: 30%;

            }
            p{
                text-indent: 2em;
            }
        }
    }
</style>
