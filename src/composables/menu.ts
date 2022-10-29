import { IMenu } from "#/menu";
import { ref } from "vue";
import routers from "@/router";
import utils from "@/utils";
import { CacheEnum } from "@/enum/cacheEnum";
import { RouteLocationNormalized } from "vue-router";
import { forEach } from "lodash";

class Menu {
    public menu = ref<IMenu[]>([])
    public history = ref<IMenu[]>([])
    constructor() {
        this.menu.value = this.getMenuByRoute()
        this.history.value = utils.store.get(CacheEnum.HISTORY_MENU) as unknown as IMenu[] ?? []
    }
    setCurrentMenu(route:RouteLocationNormalized){
        this.menu.value.forEach((item) => {
            item.isClick = false
            item.children?.forEach((cmenu) => {
                if(cmenu.route == route.name){
                    item.isClick = true
                    cmenu.isClick = true
                }
            })
        })
    }
    getMenuByRoute() {
        //获取到所有的路由
        return routers.getRoutes()
            //筛选具有子路由的路由，且父级路由元信息中具有menu属性的路由
            .filter(route => route.children.length && route.meta.menu)
            .map(route => {
                let menu: IMenu = { ...route.meta.menu }
                menu.children = route.children.filter(route => route.meta?.menu)
                    .map(route => {
                        return { ...route.meta?.menu, route: route.name }
                    }) as IMenu[];
                return menu;
            })
            .filter(menu => menu.children?.length)
    }
}


export default new Menu();