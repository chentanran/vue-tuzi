<template>
    <div class="goodsinfo_number-contain">
    <div class="number">
            <span @click="sub">-</span>
            <input type="text"  v-model="num" ref="num">
            <span @click="add">+</span>    
        </div>
    </div>
   
</template>

<script>
export default {
    props:["number"],
    data(){
        return {
            num : 1
        }
    },
    methods:{
        //减少数据
        sub(){
                if(this.num <= 1){
                    return;
                }
                this.num--;
          },
          //添加数据
          add(){
              if(this.num >= this.number){
                  return;
              }
              this.num++;
          },
          //
          getCount(){
            //   this.$emit();
            // console.log(this)
          }
    },
    updated(){
        // console.log(this.$refs.num._value)
        this.$emit("getnumber", {num :this.$refs.num._value})
    }
  
};
</script>

<style lang="less">
    .goodsinfo_number-contain{
         .number{
                    margin-left: 20px;
                    display: flex;
                    width: 100px;
                    border: 1px solid #ccc;
                    text-align: center;
                    line-height: 30px;
                    
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
</style>
