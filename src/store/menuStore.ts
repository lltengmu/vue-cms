import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router';
export default defineStore('router', {
    state: () => {
        return {
            menus: IMenu,
        }
    },
    actions: {
        getMenuByRoute() {
            const routers = useRouter()
            const routes = routers.getRoutes()
                .filter(route => route.children.length && route.meta.show)
                .map(route => {
                    route.children = route.children.filter(route => route.meta?.show)
                    return route;
                })
                .filter(route => route.children.length)
            return routes;
        }
    }
})
