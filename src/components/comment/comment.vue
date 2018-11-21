<template>
    <div class="comment-contain">
        <h3 class="comment">评论区:</h3>
        <textarea placeholder="请发表你对本文章的评论!!"></textarea>
        <mt-button size="large" type="primary" class="btn-orange"  @click="addComment">发表评论</mt-button>
         <ul class="content-ul">
             <li class="list" v-for="(item,i) in items" :key="item.id">
                 <div class="list-subtitle"><span>第{{i+1}}楼</span><span>用户: {{item.user_name}}</span><span>发表时间: {{item.add_time | datastr}}</span></div>
                 <div class="list-content">{{item.content ? item.content : "此用户给了好评"}}</div>
             </li>
        </ul>  
         <mt-button size="large" type="primary" class="btn-plain" >加载更多</mt-button>
    </div>    
</template>

<script>
    import { Toast } from "mint-ui"

    export default {
        data(){
            return {
                items : "",
                pageindex: 1
            }
        },
        created(){
            this.getComment();
            // console.log(this.$router)
        },
        methods:{
            //获取评论
            getComment(){
                this.$http.get(`api/getcomments/${this.$route.params.id}?pageindex=${this.pageindex}`).then(res=>{
                    // console.log(res);
                    if(res.body.status == 0){
                        this.items = res.body.message;
                    }else{
                        Toast("数据获取失败")
                    }
                })
            },
            //发表评论
            addComment(){
                 let content = document.querySelector("textarea").value;

                this.$http.post(`api/postcomment/${this.$route.params.id}`, { content : content }, {emulateJSON: true}).then(res=>{
                    if(res.body.status == 0){
                        this.getComment()
                    }else{
                        Toast("数据获取失败")
                    }
                })
               
              
            }
        }
    }
</script>

<style lang="less">
    .comment-contain{
        padding-top: 15px;
        .comment{
            font-size: 18px;
            color: orange;
            margin-bottom: 10px;
        }
        textarea{
            font-size: 15px;
            margin-bottom: 5px;
        }
        .btn-orange{
            background-color: orange;
        }
        .content-ul{
            list-style: none;
            margin: 0;
            padding: 10px;
            .list{
                margin: 10px 0;
                .list-subtitle{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                }
                .list-content{
                    margin: 5px 0;
                    color: skyblue;
                }
            }
        }
        .btn-plain{
            border: 1px solid orange;
            background-color: #fff;
            color: orange;
        }
    }
</style>
