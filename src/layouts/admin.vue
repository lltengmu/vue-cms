<template>
    <div class="admin min-h-screen w-screen flex">
        <MenuComponent class="hidden md:block" />
        <div class="content flex-1 bg-gray-100">
            <navbar />
            <Historylink />
            <div class="m-5">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MenuComponent from './admin/menu.vue'
import Navbar from './admin/navbar.vue'
import Historylink from './admin/historylink.vue';
import menuStore from '@/store/menuStore';
menuStore().init()
</script>

<style lang="scss" scoped>
 
</style> 


<script lang="ts">
export default {
    route: { meta: { auth: true } }
}
</script>