import vuex from 'vuex'

import Vue from 'vue';

import store from '../vuex/store'

import vuexDom from '../components/vue/vuex/vuex.vue'

new Vue({
    el: '#app',
    store,
    render: h => h(vuexDom)
})