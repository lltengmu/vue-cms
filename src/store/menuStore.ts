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
            this.historyMenu = utils.store.get(CacheEnum.HISTORY_MENU) as unknown as IMenu[] ?? [];
        },
        //移除历史菜单
        removeHistoryMenu(menu:IMenu) {
            const index = this.historyMenu.indexOf(menu)
            this.historyMenu.splice(index,1)
        },
        //添加历史菜单
        addHistoryMenu(route:RouteLocationNormalized) {
            //路由元信息中不存在menu字段,则退出
            if(!route.meta.menu)return;
            //将路由元信息中的menu属性解构出来与路由names属性,组合成新的对象 { title:'',route:'' }
            const menu:IMenu = { ...route.meta?.menu,route: route.name as string } 
            //判断历史菜单中是否已经存在该菜单
            const isHas = this.historyMenu.some(item =>item.route === route.name )
            //不存在则将当前菜单加入历史队列
            if(!isHas)this.historyMenu.push(menu)
            //历史菜单超过10个，默认弹出最后一个
            if(this.historyMenu.length > 10){
                this.historyMenu.pop()
            }
            //将最新的历史菜单存储到本地缓存中
            utils.store.set(CacheEnum.HISTORY_MENU,this.historyMenu)
        },
        //根据路由获取菜单 
        getMenuByRoute() {
            //获取到所有的路由
            this.menus = routers.getRoutes()
                //筛选具有子路由的路由，且父级路由元信息中具有menu属性的路由
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
