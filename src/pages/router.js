
import Vue from 'vue';
import routerDom from '../components/vue/router/router.vue'

import router from '../router'


router.beforeEach((to, from, next) => {
    //在这里做登录验证判断
    if(!to.matched || to.matched.length===0){
        next('/404')
    }else{
        next();
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(routerDom)
})