
<template>
    <div class="menu w-[200px] bg-gray-800 p-4">
        <div class="logo text-gray-300 flex items-center">
            <i class="fas fa-robot text-fuchsia-500 mr-2 text-[20px]"></i>
            <span class="text-sm">后台管理系统</span>
        </div>
        <!-- 菜单 -->
        <div class="left-container">
            <dl>
                <dt @click="$router.push({name:'admin.home'})" :class="{'bg-violet-600 text-white rounded-md p-3':$route.name === 'admin.home'}">
                    <section class="flex items-center">
                        <i class="mr-2 text-lg fas fa-home"></i>
                        <span class="text-md">dashboard</span>
                    </section>
                    <section>
                        <i class="fas fa-angle-down duration-300"></i>
                    </section>
                </dt>
            </dl>
            <dl v-for="(menu, index) of menuService.menu.value" :key="index">
                <dt @click="menu.isClick=true">
                    <section class="flex items-center">
                        <i :class="menu.icon" class="mr-2 text- lg"></i>
                        <span class="text-md">{{ menu.title }}</span>
                    </section>
                    <section> 
                        <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
                    </section>
                </dt>
                <dd v-show="menu.isClick" :class="{ active: cmenu.isClick }" v-for="(cmenu, key) of menu.children" :key="key" @click="$router.push({ name:cmenu.route })">
                    {{ cmenu.title }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script setup lang="ts">
import menuStore from '@/store/menuStore'
import { useRoute, useRouter } from 'vue-router';
import { IMenu } from '#/menu';

import menuService from '@/composables/menu'
import { watch } from 'vue';
//使用composition api 管理 menu组件
const route = useRoute()
watch(route,() => menuService.setCurrentMenu(route),{ immediate:true })




//const menuObject = menuStore()
////获取当前路由实例
//const routerService = useRouter()

//const reset = () => {
//    menuObject.menus.forEach(menu => {
//        menu.isClick = false;
//        menu.children?.forEach(cmenu => {
//            cmenu.isClick = false
//        })
//    });
//}
////按钮路由跳转使用的是编程式路由跳转
//const handle = (pmenu: IMenu, cmenu?: IMenu) => {
//    reset();
//    pmenu.isClick = true;
//    if (cmenu) {
//        cmenu.isClick = true
//        routerService.push({ name: cmenu.route })
//    }
//}
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