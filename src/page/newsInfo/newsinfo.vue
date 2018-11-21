<template>
    <div class="newsinfo-contain">
        <h3 class="title">{{item.title}}</h3>
        <div class="subtitle">
            <span>时间: {{item.add_time | datastr}}</span>
            <span>点击: {{item.click}}</span>
        </div>
        <hr/> 
        <div v-html="item.content" class="content"></div> 

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
                item: ""
            }
        },
        created(){
            // console.log(this.$route)
            this.getInfo()
        },
        methods: {
            getInfo(){
                this.$http.get(`api/getnew/${this.id}`).then(res=>{
                    // console.log(res);
                    if(res.body.status == 0){
                       this.item = res.body.message[0]
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .newsinfo-contain{
        padding: 0 5px;
        .title{
           text-align: center;
            font-size: 18px;
            padding: 20px 0 10px;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
        .content{
            p{
                text-indent: 2em;
            }
        }
    }
</style>