import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || "[]") 

var store  = new Vuex.Store({
    state: {
         car: car
    },
    mutations:{
        //将数据保存到本地存储 
        getCar(state, goodsinfo){
            var flag = false;
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.num += parseInt(goodsinfo.num)
                   
                    flag = true;
                    return true;
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            //将数据保存到本地存储
            localStorage.setItem("car", JSON.stringify(state.car))
        },
          //减少购物车数量
          decrease(state,id){
            state.car.forEach(item => {
                if(item.num <= 1){
                    return;
                }
                if(item.id == id){
                    item.num--
                }
            })
        localStorage.setItem("car", JSON.stringify(state.car))
        },
          //增加购物车数量
          increase(state,id){
            state.car.forEach(item => {
                if(item.id == id){
                    item.num++
                }
            })
        localStorage.setItem("car", JSON.stringify(state.car))
        },
        //根据id删除对应商品的本地存储
        delData(start, id){
            start.car.some((item,index) =>{
                if(item.id == id){
                    start.car.splice(index,1)
                }
                return true;
            })
            localStorage.setItem("car", JSON.stringify(start.car))
        },
        //触发按钮,取反选择框
        selectData(state, data){
            // console.log(data)
            state.car.forEach(item => {
                if(item.id == data.id){
                    item['select'] = !data.val
                }
            })
            localStorage.setItem("car", JSON.stringify(state.car))
        }
    },
    getters:{
        //获取购物车的数量
        getCount(state){
            var c = 0;
            state.car.forEach(item =>{
                if(item.select){
                    c += item.num;  
                }
               
            })
            return c;
        },
        //获取商品列表的数量
        getGoodsCount(state){
            let list = {}
            state.car.forEach(res=>{
                list[res.id] = res.num
                
            })
            return list
        },
        //获取是否选中
        getSelect(state){
            let list = {}
            state.car.forEach(res =>{
                list[res.id] = res.select
            })
            return list
        },
        //总价
        getCountAndPrice(state){
            let list = {
                num : 0,
            }
            state.car.forEach(item => {
                
                list.num += item.num
            })
            return list
        }
    }
})

export default store