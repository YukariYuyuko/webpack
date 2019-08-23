<template>
  <div>
      <h2>child自组件传值</h2>
      <p>{{message}}</p>
      <button @click="sendFather">向爹传值</button>
  </div>
</template>

<script>
export default {
    props:['message'],
    methods:{
        sendFather(){
            //.在响应该点击事件的函数中使用$emit来触发一个自定义事件，并传递一个参数
            this.$emit("listenChild","this message is from child")
        }
    }

}
</script>

<style>

</style>