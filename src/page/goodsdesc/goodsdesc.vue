<template>
    <div class="goodsDesc-contain">
        <h3>{{datas.title}}</h3>
        <p v-html="datas.content"></p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            datas : []
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            this.$http.get("api/goods/getdesc/" + this.id).then(res =>{
                console.log(res)
                if(res.body.status == 0){
                    this.datas = res.body.message[0]
                }
            })
        }
    }
}
</script>

<style lang="less">
    .goodsDesc-contain{
        padding: 10px;
        h3{
            font-size: 16px;
            text-align:center;
        }
        p{
            text-indent: 2em;
            margin: 0;
            padding: 0;
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>
