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
        }
    },
    getters:{
        //获取购物车的数量
        getCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c += item.num;
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
        }
    }
})

export default store