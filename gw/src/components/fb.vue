<template>
  <div id="app">
    <!-- <h1>购物车</h1>
    <div v-for="item in shopList" :key="item.id">
      <input type="checkbox" checked="item.check" @click="changeCheck(item.id)" />
      <span>id:{{item.id}}</span>
      <span>name:{{item.name}}</span>
      <span>price:{{item.price}}</span>
      <input type="button" value="--" @click="minus(item.id)" />
      <span>count:{{item.count}}</span>
      <input type="button" value="++" @click="add(item.id)" />
      <span>subtotal:{{item.price *item.count}}</span>
    </div>
    <div>tatal prices:{{sum()}}</div> -->

    
<!-- 
    <h1>黄家点名簿</h1>
    <input type="text"   v-model="val"/>
    <button @click="sousuo(val,'xb')">搜索</button>
    <div class="xx">
      <div class="sexp">
        <span>sex:</span>
        <span>
          <a href="javascript:;" v-text="男" @click="dian($event,'xb','sxs')" class="sxs"></a>
        </span>
        <span>
          <a href="javascript:;" v-text="女" @click="dian($event,'xb','sxs')" class="sxs"></a>
        </span>
      </div>
      <div class="hobbyp">
        <span>hobby:</span>
        <span>
          <a href="javascript:;" v-text="天梯" @click="dian($event,'xb','sxs')" class="sxs"></a>
        </span>
        <span>
          <a href="javascript:;" v-text="唱跳" @click="dian($event,'xb','sxs')" class="sxs"></a>
        </span>
        <span>
          <a href="javascript:;" v-text="演员" @click="dian($event,'xb','sxs')" class="sxs"></a>
        </span>
      </div>
    </div>
    <div class="nr">
      <div v-for="apps in applist" :key="apps.id">
        <div class="xb">
          <span>{{apps.name}}</span>
          <span>{{apps.age}}</span>
          <span>{{apps.sex}}</span>
          <span>{{apps.hobby}}</span>
        </div>
      </div>
    </div> --> 
    <!-- 发布页面 -->
   <!-- <router-link to="/shop">
   <div class="gwc">
     购物车
     </div>
     </router-link>  -->

    <div class="fbym">
        <div>商品发布页面</div>
       <div>name:<input type="text"  v-text="name" v-model="name"></div>
       <div>单价：<input type="text" v-text="danjia" v-model="danjia"></div>
       <div>介绍：<input type="text" v-text="jieshao" v-model="jieshao"></div>
       <div>数量：<input type="text" v-text="shuliang" v-model="shuliang"></div>
        <button @click="tj">添加</button>
        <!-- <button @click="fb">发布</button>
        <button @click="cl" >出来吧</button> -->
    </div>
    <!-- <child :message="hello" @listenChild="showChild"></child>
     -->
     <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import child from "./components/Child.vue";
// // import { setInterval } from 'timers';
//   var hello = []
let shoplist = []
export default {
  // props:["baba"],
  
  //在父组件中的子标签中监听该自定义事件并添加一个响应该事件的处理方法
  // components: {
  //   child
  // },
  name: "app",
  data: function() {
    return {
      name:" ",
      danjia:" ",
      jieshao:" ",
      shuliang:" ",
      
      // shopList: [
      //   { id: 1, name: "小米手机", price: "5000", count: "5", check: true },
      //   { id: 2, name: "小米电脑", price: "3000", count: "6", check: true },
      //   { id: 3, name: "小米手环", price: "200", count: "4", check: true }
      // ],
      // applist: [
      //   { id: 1, name: "黄真辉", age: 21, sex: "男", hobby: "天梯" },
      //   { id: 2, name: "黄子协", age: 21, sex: "女", hobby: "唱跳" },
      //   { id: 3, name: "黄超宇", age: 20, sex: "男", hobby: "天梯" },
      //   { id: 4, name: "黄子韬", age: 40, sex: "男", hobby: "唱跳" },
      //   { id: 5, name: "黄子健", age: 45, sex: "男", hobby: "演员" },
      //   { id: 6, name: "黄黄昏", age: 21, sex: "女", hobby: "天梯" }
      // ],
      // 男: "男",
      // 女: "女",
      // 天梯: "天梯",
      // 唱跳: "唱跳",
      // 演员: "演员",
      // sex: "sex",
      // hobby: "hobby",
      // val:[],
    };
  },
  methods: {
    tj(){
      let popop = []
       popop = {
        name:this.name,
        danjia:this.danjia,
        jieshao:this.jieshao,
        shuliang : this.shuliang
      }
    this.shoplist = []

    shoplist.push(popop)
  
 localStorage.setItem("shoplist",JSON.stringify(shoplist))
 
    //  console.log(localStorage.getItem("shoplist"))
      // this.hello.push(this.popop)
      // localStorage.setItem("shoplist", JSON.stringify(this.hello)) 
      // console.log(this.hello)
    },


 
    // fb(){
    //    console.log(this.hello)
    // //  JSON.stringify(this.hello)
    //   localStorage.setItem("shoplist", JSON.stringify(this.hello)) 
    //   console.log( localStorage.setItem("shoplist",this.hello) )
    // },
    // cl(){
    //      JSON.parse(this.hello)
    //     console.log(localStorage.getItem("shoplist"))
    
    // //  console.log (hello.name)
    // }
    // add(id) {
    //   this.shopList.forEach(item => {
    //     if (item.id == id) {
    //       item.count++;
    //     }
    //   });
    // },
    // minus(id) {
    //   this.shopList.forEach(item => {
    //     if (item.id == id) {
    //       item.count--;
    //     }
    //   });
    // },
    // sum() {
    //   var sum = 0;
    //   this.shopList.forEach(item => {
    //     if (item.check == true) {
    //       sum += item.price * item.count;
    //     }
    //   });
    //   return sum;
    // },
    // changeCheck(id) {
    //   this.shopList.forEach(item => {
    //     if (item.id == id) {
    //       item.check = !item.check;
    //     }
    //   });
    // },
    // showChild(data) {
    //   console.log(data);
    // },
    // //下面是点名
    // dian(a, b, c) {
    //   //a是点的那个，b是筛选的数组，c是点的数组
    //   // console.log(a.target.innerText)
    //   var b = document.getElementsByClassName(`${[b]}`);
    //   var c = document.getElementsByClassName(`${[c]}`);

    //   if (
    //     a.target.style.background == "" ||
    //     a.target.style.background == "none"
    //   ) {
    //     a.target.style.background = "red";
    //     for (var i = 0; i < b.length; i++) {
    //       if (b[i].innerText.indexOf(a.target.innerText) == -1) {
    //         b[i].style.display = "none";
    //       }
    //     }

    //     // for(var q =0;q< [b].length;q++){
    //     //   if()
    //     // }
    //     // b.target.innerText
    //   } else {
    //     a.target.style.background = "none";
    //     for (var q = 0; q < b.length; q++) {
    //       b[q].style.display = "flex"; //全显示
    //       //测试几个红
    //       // console.log(b[q])
    //       for (var j = 0; j < c.length; j++) {
    //         // console.log(c[j].innerText)
    //         // console.log(c[j].style.background)
    //           if(c[j].style.background == "red"){
    //             for(var w =0;w<b.length;w++){
    //         // console.log(c[j].innerText,b[w].innerText)
    //         if(b[w].innerText.indexOf(c[j].innerText) == -1){
    //          b[w].style.display = "none"
    //         }
    //             }
                
    //           }


    //         // if (c[j].style.background == "red") {
    //           // do{  console.log(b[j]) 
    //           // // b[j].style.display = "none" 
    //           // }while(c[j].style.background == "red")

    //           // console.log(b[j])
    //           // // if(b[j].innerText.indexOf(c[j].innerText) == -1){
    //           //   b[j].style.display = "none"
    //           // }
    //         // }
    //       }
    //     }
    //   }
    // },
    // sousuo(d,e){
    //     //d是数据，e是被搜索的数组
    //     // console.log(d,e)
        
    //     var e = document.getElementsByClassName(`${[e]}`);
    //     for(var i = 0;i<e.length; i++){
    //       e[i].style.display = "flex"
    //        console.log(e[i])
    //        if(e[i].innerText.indexOf(d) == -1){
    //          e[i].style.display = "none"
    //        }
    //       // if([e][i].innerText.indexOf([d]) == -1){
    //       //   [e][i].style.display = "none"
    //       //   // console.log(d,e)
    //       // }
    //     }
    // }

    //       let xb = document.getElementsByClassName("xb")

    //       // setInterval(()=>{
    //       for(var i= 0;i<this.applist.length;i++){
    //         // console.log(applist[i])
    //         // applist[i].sex
    //         xb[i].style.display = "flex"
    //         if(this.applist[i][a] !== b){
    //           // console.log(this.applist[i])
    //           //  this.ios = false
    //             // this.applist[i].style="display:'none'";
    //           xb[i].style.display ="none"
    //         }
    //       }
    // // },10)
    //       // this.applist.forEach(item => {
    //       //   console.log ()
    //       //   //  if (apps.sex != text) {
    //       //   //   this.applist.ios = !this.ios;
    //       //   // }
    //       // });
  },

};
</script>

<style lang="stylus">
*{margin :0;
padding :0}
.fbym{
  width : 500px;
  height :800px;
  border: 1px solid black;
  margin : 10px auto;
  display :flex;
  justify-content :space-around;
  flex-direction :column;
  align-content :center;
  align-items :center;
   background :yellowgreen;
}
.fbym >div{
  font-size :30px;
}
input{
  outline:none;
  border:1px solid black;
  background :yellowgreen;
  width :300px;
  height :50px;
  text-align :center;
  line-height :50px;
  border-radius: 30px;
}
button{
  outline:none;
  width:100px;
  height:100px;
  border-radius:50%;
  font-size :25px;
}
.gwc{
  width :100px;
  font-size:20px;
  text-align :center;
  float :right;
  border:1px solid black;
  cursor:pointer;
}
</style>
