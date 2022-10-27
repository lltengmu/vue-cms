<template>
    <div class="menu w-[200px] bg-gray-800 p-4">
        <div class="logo text-gray-300 flex items-center">
            <i class="fas fa-robot text-fuchsia-500 mr-2 text-[20px]"></i>
            <span class="text-sm">后台管理系统</span>
        </div>
        <!-- 菜单 -->
        <div class="left-container">
            <dl v-for="(route, index) of routerStore.routes" :key="index">
                <dt @click="handle(route)">
                    <section class="flex items-center">
                        <i :class="route.meta.icon" class="mr-2 text-lg"></i>
                        <span class="text-md">{{ route.meta.title }}</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': route.meta.isClick }"></i>
                    </section>
                </dt>
                <dd v-show="route.meta.isClick" :class="{ active: childRoute.meta?.isClick }" v-for="(childRoute, key) of route.children" :key="key" @click="handle(route,childRoute)">
                    {{ childRoute.meta?.title }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { routers } from '@/store/menuStore'
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from 'vue-router';
 
const routerStore = routers()
//获取当前路由实例
const routerService = useRouter()

const reset = () => {
    routerStore.routes.forEach(route => {
        route.meta.isClick = false;
        route.children?.forEach(route => {
            if (route.meta) {
                route.meta.isClick = false
            }
        })
    });
}
//按钮路由跳转使用的是编程式路由跳转
const handle = (pRoute: RouteRecordNormalized, cRoute?: RouteRecordRaw) => {
    reset();
    pRoute.meta.isClick = true;
    if (cRoute && cRoute.meta) {
        cRoute.meta.isClick = true
        routerService.push(cRoute)
    }
}
</script>

<style lang="scss" scoped>
.left-container {
    dl {
        @apply text-gray-300 text-sm;

        dt {
            @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
        }

        dd {
            @apply py-2 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 bg-gray-700 hover:bg-violet-500;
            ;

            &.active {
                @apply bg-violet-700
            }
        }
    }
}
</style>