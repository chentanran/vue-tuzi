<template>
     <mt-swipe class="home_swipe">
            <mt-swipe-item v-for="(item, i) in datas" :key="i">
                 <a :href="item.url">
                     <img :src="item.img" alt="" :class="{img : img }">
                 </a>
            </mt-swipe-item>
        </mt-swipe>
</template>

<script>
export default {
    props:["datas","img"],
    created(){
        console.log(this.datas)
    }
}
</script>

<style lang="less">
      .home_swipe{
        height: 200px;
        // background-color: skyblue;
           a{
               display: block;
               height: 100%;
               width: 100%;
               text-align:center;
               img{
                //    display: block;
                display: inline-block;
                   height: 100%;  
               }
                img.img{
                    height: 100%;
                     width: 100%;
                }
           } 
    }
</style>
