import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex

const state={
    nodeVoteCount:10,//node的初始票数
    vueVoteCount:10,//vue的初始票数
}

//Vuex 建议我们mutation需要用大写常量来表示
//生明一个常量mutations，将所有的mutation放入其中
const mutations={
    //为nodeVoteCount加1
    ADDNODEVOTE(state,voteNum=1){//这里的state即是上面定义的state常量
        state.nodeVoteCount+=voteNum;
       //根据具体情况，你还可以在这里写一些其它的逻辑来改变状态
    },
    //为vueVoteCount加1
    ADDVUEVOTE(state,voteNum=1){//这里的state即是上面定义的state常量
        state.vueVoteCount+=voteNum;
        //根据具体情况，你还可以在这里写一些其它的逻辑来改变状态
    }
}

//用户异步操作
const actions={
    asyncAddVote:function(context,voteNum=100){//这里的context和我们使用的$store拥有相同的对象和方法
        console.log(voteNum)
        setTimeout(()=>{
            context.commit("ADDVUEVOTE",voteNum);
        },1000)
    }
}

//getters为vuex当中的计算属性
const getters={
    //求总票数之和，阔以在这里处理
    sumCount(state){//state即是存储状态的对象
        return state.nodeVoteCount+state.vueVoteCount
    }
}

export default new Vuex.Store({//暴露Store对象
    state,
    mutations,
    getters,
    actions
})