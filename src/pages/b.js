
import Vue from 'vue';

import moculeB from '../components/js/module'
import '../css/b.css'

console.log('this is b')

import Menu from '../components/vue/menu/menu.vue'


console.log('this is a')

new Vue({
    el: '#app',
    render: h => h(Menu)
})