import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router';
import { IMenu } from '#/menu'
import routers from '@/router'
export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[],
        }
    },
    actions: {
        init(){
            this.getMenuByRoute();
        },
        //根据路由获取菜单
        getMenuByRoute() {         
            this.menus = routers.getRoutes()
                .filter(route => route.children.length && route.meta.menu)
                .map(route => {
                    let menu:IMenu = { ...route.meta.menu }
                    menu.children = route.children.filter(route => route.meta?.menu)
                    .map(route => {
                        return route.meta?.menu
                    }) as IMenu[];
                    return menu;
                })
                .filter(menu => menu.children?.length)
        }
    }
})
