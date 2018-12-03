<template>
    <div>
        vue-router演示
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/ours">ours</router-link>
         <router-link to="/404">测试404(随意输入路由)</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>
