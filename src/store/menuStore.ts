import { defineStore } from 'pinia'
import { RouteLocationNormalized, RouteRecordNormalized, useRouter } from 'vue-router';
import { IMenu } from '#/menu'
import routers from '@/router'
import utils from '@/utils';
import { CacheEnum } from '@/enum/cacheEnum';
export default defineStore('menu', {
    state: () => {
        return {
            menus: [] as IMenu[],
            historyMenu:[] as IMenu[],
        }
    },
    actions: {
        init() {
            this.getMenuByRoute();
            this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) as unknown as IMenu[]
        },
        //添加历史菜单
        addHistoryMenu(route:RouteLocationNormalized) {
            //路由元信息中不存在menu字段,则退出
            if(!route.meta.menu)return;
            const menu:IMenu = { ...route.meta?.menu,route: route.name as string } 
            const isHas = this.historyMenu.some(item =>item.route === route.name )
            if(!isHas)this.historyMenu.push(menu)
            if(this.historyMenu.length > 10){
                this.historyMenu.pop()
            }
            utils.store.set(CacheEnum.HISTORY_MENU,this.historyMenu)
        },
        //根据路由获取菜单 
        getMenuByRoute() {
            this.menus = routers.getRoutes()
                .filter(route => route.children.length && route.meta.menu)
                .map(route => {
                    let menu: IMenu = { ...route.meta.menu }
                    menu.children = route.children.filter(route => route.meta?.menu)
                        .map(route => {
                            return { ...route.meta?.menu, route:route.name }
                        }) as IMenu[];
                    return menu;
                })
                .filter(menu => menu.children?.length)
        }
    }
})
