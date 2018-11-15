<template>
    <div>
        <div>this is home，测试-打包-这是一张img</div>
        <div><img src="../../../../images/test.png"></div>
        <div class="bg-div"><p>30px，测试-打包-这是一张背景图</p></div>
        <home-animation></home-animation>
    </div>
</template>
<script>
import HomeAnimation from './home-animation/home-animation';
export default {
    components:{
        HomeAnimation
    },
    created(){
        console.log('this is a home');
    }    
}
</script>
<style lang='less' scoped>
    .bg-div{
        width: 384px;
        height: 300px;
        background: url('../../../../images/test.png') no-repeat center;
        p{
            font-size: 30px;
        }
    }
</style>
 