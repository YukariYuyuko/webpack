import Vue from 'vue'
import VueRouter from 'vue-router'
import fb from '../../src/components/fb.vue'
// import App from "../../src/App.vue"
import shop from '../../src/components/ym.vue'
import gwc from '../../src/components/gwc.vue'

Vue.use(VueRouter)


export default new VueRouter({
    routes: [{
            path: '/fb',
            component: fb
        },
        {
            path: '/shop',
            component: shop
        },
        {
            path: '/gwc',
            component: gwc
        }
    ],
    mode: 'history' //去掉路径中的"#"
})