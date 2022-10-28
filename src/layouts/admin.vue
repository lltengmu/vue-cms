<template>
    <div class="admin min-h-screen w-screen flex">
        <MenuComponent class="hidden md:block" />
        <div class="content flex-1 bg-gray-100">
            <navbar />
            <Historylink />
            <div class="m-5">
                <router-view #default="{ Component }">
                    <Transition appear enter-active-class="animate__animated animate__bounceInRight">
                        <component :is="Component" />
                    </Transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import Historylink from './admin/historylink.vue';
import menuStore from '@/store/menuStore';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
const menu = menuStore()
const route = useRoute()
menu.init();
onBeforeRouteUpdate(() => {
    menu.addHistoryMenu(route)//记录历史路由
})
</script>

<style lang="scss" scoped>

</style> 


<script lang="ts">
export default {
    route: { meta: { auth: true } }
}
</script>