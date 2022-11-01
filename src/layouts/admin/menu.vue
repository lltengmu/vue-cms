
<template>
    <div class="admin-menu">
        <div class="menu w-[200px] bg-gray-800 p-4" :class="{ close: menuService.close.value }">
            <div class="logo text-gray-300 flex items-center">
                <i class="fas fa-robot text-fuchsia-500 mr-2 text-[24px]"></i>
                <span class="text-sm">后台管理系统</span>
            </div>
            <!-- 菜单 -->
            <div class="left-container">
                <dl>
                    <dt @click="$router.push({ name: 'admin.home' })"
                        :class="{ 'bg-violet-600 text-white rounded-md p-3': $route.name === 'admin.home' }">
                        <section class="flex items-end">
                            <i class="mr-2 text-lg fas fa-home"></i>
                            <span class="text-md">dashboard</span>
                        </section>
                    </dt>
                </dl>
                <dl v-for="(menu, index) of menuService.menu.value" :key="index">
                    <dt @click="menu.isClick = true">
                        <section class="flex items-center">
                            <i :class="menu.icon" class="mr-2 text-lg"></i>
                            <span class="text-md">{{ menu.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': menu.isClick }"></i>
                        </section>
                    </dt>
                    <dd>
                        <div v-show="menu.isClick" :class="{ active: cmenu.isClick }" v-for="(cmenu, key) of menu.children"
                        :key="key" @click="$router.push({ name: cmenu.route })">
                        {{ cmenu.title }}
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="bg block md:hidden"></div>
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
watch(route, () => menuService.setCurrentMenu(route), { immediate: true })




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
.admin-menu{
    @apply h-screen;
    .menu{
        @apply h-full;
    }
}
.left-container {
    dl {
        @apply text-gray-300 text-sm relative;

        dt {
            @apply text-sm mt-6 flex justify-between items-center cursor-pointer;
        }
        dd{
            div {
                @apply py-2 pl-4 my-2 text-white rounded-md cursor-pointer duration-300 bg-gray-700 hover:bg-violet-500;
                ;

                &.active {
                    @apply bg-violet-700
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .admin-menu{
        @apply h-screen;
        .menu {
            width: auto;

            &.close {
                .logo {
                    span {
                        @apply hidden
                    }
                }

                .left-container {
                    dl {
                        dt {
                            @apply flex justify-center;

                            section {
                                i {
                                    @apply mr-0;
                                }

                                span {
                                    @apply hidden;
                                }

                                &:nth-of-type(2) {
                                    @apply hidden
                                }
                            }
                        }
                        dd{
                            @apply absolute left-full;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .admin-menu{
        @apply h-screen w-[200px] absolute top-0 left-0 z-[50];
        .menu {
            @apply h-full z-[50] absolute;

        .close {}

        }
        .bg {
            @apply bg-gray-800 opacity-75 w-screen h-screen z-[40] absolute left-0 top-0;
        }
    }
    
}
</style>