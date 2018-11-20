<template>
    <div>
        <h3>vuex获取数据方式一：$store.state.vueVoteCount</h3>
        <div>{{$store.state.vueVoteCount}}</div>
        <h3>vuex获取数据方式二：通过mapState</h3>
        <div>{{vueVoteCount}}</div>
        <h3>vuex获取数据方式三：通过mapGetters</h3>
        <div>{{sumCount}}</div>
        <h1></h1>
        <button @click="$store.commit('ADDVUEVOTE')">修改数据方式一：加1</button>
        <button @click="ADDVUEVOTE(2)">修改数据方式二：加2</button>
        <h1></h1>
        <button @click="$store.dispatch('asyncAddVote')">1秒钟后异步修改数据方式一：加100</button>
        <button @click="addVote">1秒钟后异步修改数据方式二：加200</button>
    </div>
</template>
<script>
//属性就放在computed中，方法就放在methods中
import {mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
    computed:{
        ...mapState(["vueVoteCount","nodeVoteCount"]),
        ...mapGetters(["sumCount"])
    },
    created(){
        console.log('this is b menu')
    },
    methods:{
        ...mapMutations(["ADDNODEVOTE","ADDVUEVOTE"]),
        ...mapActions(["asyncAddVote"]),
        ...{
            //写自己定义的方法
            addVote(){
                this.asyncAddVote(200)
            }
        }
    }
}
</script>
<style lang='less' scoped>
    .div{
        background-color: red;
    }
</style>
