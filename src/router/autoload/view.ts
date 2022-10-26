import { RouteRecordRaw } from "vue-router"
import { env } from '@/utils'

const layouts = import.meta.glob('../layouts/*.vue',{ eager:true })//动态获取layouts文件夹下的所有文件
const views = import.meta.glob('../views/**/*.vue',{ eager:true })// ** 是指可以递归的遍历views文件夹下的子目录


function getRoutes(){
    const layoutRoutes = [] as RouteRecordRaw[]
    Object.entries(layouts).forEach(([file,module]) => {
        const route = getRouterByModule(file,module as unknown as {[key:string]:any})
        route.children = getChilrenRoutes(route)
        layoutRoutes.push(route)
    })
    return layoutRoutes;
}

//获取子路由
function getChilrenRoutes(layoutRoute:RouteRecordRaw){
    const routes = [] as RouteRecordRaw[];
    Object.entries(views).forEach(([file,module]) => {
        if(file.includes(`../views/${layoutRoute.name as unknown as string}`)){
            const route = getRouterByModule(file, module as unknown as {[key:string]:any})
            //console.log(route)
            routes.push(route)
        }
    })
    return routes;
}
function getRouterByModule(file:string,module:{[key:string]:any}){
    const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi,'')//取得文件名
    const route = {
        name:name.replace('/','.'),
        path:`/${name}`,
        component:module.default,
    } as RouteRecordRaw
    return Object.assign(route, module.default?.route);//将组件自定义的路由合并
}
export default getRoutes;