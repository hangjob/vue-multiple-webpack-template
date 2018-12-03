import Vue from 'vue';
import moculeA from '../components/js/module'

import '@/components/css/style.css'
import '@/css/a.css'

import Home from '../components/vue/home/home.vue'

console.log('this is a')

new Vue({
    el: '#app',
    render: h => h(Home)
})