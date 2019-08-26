import Vue from "vue"
import App from "../src/App.vue"
import router from './router/xm.js'

// Vue.use(VueRouter)


new Vue({
    el: "#app",
    render(h) {
        return h(App)
    },
    router
});