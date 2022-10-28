<template>
    <div class="flex items-center justify-center min-h-screen bg-white py-48">
    <div class="flex flex-col">
        <!-- Notes -->
        <span class="text-center font-bold my-10 opacity-30">
            服务器响应错误

            <hr class="my-4">

            <router-link to="/" target="_blank" class="text-blue-600">
                首页
            </router-link>
        </span>

        <!-- Error Container -->
        <div class="flex flex-col items-center">
            <div class="text-indigo-500 font-bold text-7xl">
                500
            </div>

            <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                Server response error
            </div>

            <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                Server response error
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>