<template>
    <div class="hidden md:block bg-white p-3 border-t border-b" v-show="menuService.history.value.length">
        <div class="grid grid-flow-col gap-3 justify-start">
            <div v-for="item of menuService.history.value"
                class="bg-white border rounded-sm py-2 px-4 hover:bg-violet-600 hover:text-white"
                :class="{ 'bg-violet-600 text-wihte':$route.name === item.route }"
                >
                <router-link :to="{ name:item.route }">{{ item.title }}</router-link>
                <i class="fa fa-times ml-1 hover:text-yellow-400 cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore';
import menuService from '@/composables/menu'
//const menu = menuStore()
</script>

<style scoped>

</style>