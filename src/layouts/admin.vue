<template>
    <div class="admin h-screen w-screen grid md:grid-cols-[auto_1fr]">
        <MenuComponent />
        <div class="content bg-gray-100 grid grid-rows-[auto_1fr]">
            <div class>
                <navbar />
                <Historylink />
            </div>
            <div class="m-3 relative overflow-y-auto overflow-x-hidden">
                <router-view #default="{ Component }">
                    <Transition appear class="animate__animated" :enter-active-class="route.meta.enterClass?? 'animate__fadeInRight'" :leave-active-class="route.meta.leaveClass??'animate__fadeOutLeft'">
                        <component :is="Component" class="absolute w-full" />
                    </Transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import navbar from './admin/navbar.vue'
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
.animate__fadeInRight{
    animation-duration: 0.5s;
}
.animate__fadeOutLeft{
    animation-duration: 0.5s;
}
</style> 


<script lang="ts">
export default {
    route: { meta: { auth: true } }
}
</script>