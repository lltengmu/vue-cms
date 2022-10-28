<template>
    <div class="hidden md:block bg-white p-3 border-t border-b">
        <div class="grid grid-flow-col gap-3 justify-start">
            <router-link :to="{ name: menu.route }" v-for="menu of menuObejct.historyMenu"
                class="bg-white border rounded-sm py-2 px-4 hover:bg-violet-600 hover:text-white"
                :class="{ 'bg-violet-600 text-wihte':$route.name === menu.route }"
                >
                {{ menu.title }}
                <i class="fa fa-times ml-1"></i>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore';

const menuObejct = menuStore()

//const links = ref<{ title: string }[]>([
//    { title: '编辑器' },
//    { title: '订单列表' },
//    { title: '用户管理' },
//    { title: '销售总额' },
//    { title: '编辑器' },
//    { title: '订单列表' },
//    { title: '用户管理' },
//    { title: '销售总额' },
//    { title: '编辑器' },
//    { title: '订单列表' },
//    { title: '用户管理' },
//    { title: '销售总额' },
//]);
</script>

<style scoped>

</style>