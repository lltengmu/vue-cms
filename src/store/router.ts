import { defineStore } from 'pinia'
import { RouteRecordNormalized, useRouter } from 'vue-router';
export const routers = defineStore('router', {
    state: () => {
        return {
            routes: getRoutes(),
        }
    },
})

function getRoutes() {
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