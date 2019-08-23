<template>
  <div id="app">
    <h1>购物车</h1>
    <div v-for="item in shopList" :key="item.id">
      <input type="checkbox" checked="item.check" @click="changeCheck(item.id)">
      <span>id:{{item.id}}</span>
      <span>name:{{item.name}}</span>
      <span>price:{{item.price}}</span>
      <input type="button" value="--" @click="minus(item.id)" />
      <span>count:{{item.count}}</span>
      <input type="button" value="++" @click="add(item.id)" />
      <span>subtotal:{{item.price *item.count}}</span>
    </div>
    <div>tatal prices:{{sum()}}</div>
       
      <child :message="hello" @listenChild="showChild"></child>
    
  </div>
</template>

<script>
import child from './components/Child.vue'
export default {
  name:'app',
  data: function() {
    return {
      shopList: [
        { id: 1, name: "小米手机", price: "5000", count: "5", check: true},
        { id: 2, name: "小米电脑", price: "3000", count: "6", check: true},
        { id: 3, name: "小米手环", price: "200", count: "4", check: true }
      ],
      hello:'hello,child'
    };
  },
  methods: {
    add(id) {
      this.shopList.forEach(item => {
        if (item.id == id) {
          item.count++;
        }
      });
    },
    minus(id) {
      this.shopList.forEach(item => {
        if (item.id == id) {
          item.count--;
        }
      });
    },
    sum() {
      var sum = 0;
      this.shopList.forEach(item => {
        if(item.check == true) {
          sum += item.price * item.count;
        }
      });
      return sum;
    },
    changeCheck(id){
        this.shopList.forEach(item=>{
            if(item.id==id){
                item.check=!item.check;
            } 
        })
    },
    showChild(data){
      console.log(data)
    }
  },
  //在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法
  components:{
    child
  }
};
</script>

<style lang="stylus"></style>
