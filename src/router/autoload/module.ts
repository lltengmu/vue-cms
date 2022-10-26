import { RouteRecordRaw } from "vue-router"

export default function autoloadRouteModule(){
    const modules = import.meta.glob('../module/**/*.ts',{ eager:true }) as Record<any,any>
    
    const routes = [] as RouteRecordRaw[];
    Object.keys(modules).forEach(key => {
        routes.push(modules[key].default)
    })
    return routes;
}