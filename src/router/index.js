import Vue from  'vue';
import Router from 'vue-router';

Vue.use(Router);


export default new Router({
    routes:[
        {
            path:'/',
            component: resolve => require(['../components/vue/router/home-pages/home/home.vue'], resolve),
            meta: { title: '默认home页面' }
        },
        {
            path:'/home',
            component: resolve => require(['../components/vue/router/home-pages/home/home.vue'], resolve),
            meta: { title: 'home页面' }
        },
        {
            path:'/about',
            component: resolve => require(['../components/vue/router/home-pages/about/about.vue'], resolve),
            meta: { title: 'about页面' }
        },
        {
            path:'/ours',
            component: resolve => require(['../components/vue/router/home-pages/ours/ours.vue'], resolve),
            meta: { title: 'ours页面' }
        },
        {
            path:'/404',
            component: resolve => require(['../components/vue/router/home-pages/404.vue'], resolve),
            meta: { title: '404页面' }
        }
    ]
})