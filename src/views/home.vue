<template>
    <div class="w-screen h-screen bg-gray-700 flex flex-col justify-center items-center">
        <img src="/images/App.jpg" alt="" class="w-52 h-52 object-cover rounded-full border-8 border-white">
        <div class="mt-4">
            <router-link :to="{ name:'admin.home' }" class="hd-button">后台管理</router-link>
            <router-link :to="{ name:'login' }" class="hd-button ml-3 bg-fuchsia-600">用户登录</router-link>
        </div>
        <div class="text-gray-300 text-xs font-mono drop-shadow-md mt-5">后盾人前端脚手架课练习</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

<script lang="ts">
export default {
    route: { name: 'home', auth: true }
}
</script>