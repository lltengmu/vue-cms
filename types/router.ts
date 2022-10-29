import 'vue-router'
import { IMenu } from './menu'


//这块的接口主要是定义路由元信息的类型
declare module 'vue-router' {
  interface RouteMeta {
    //在元信息中定义访问此路由是否需要登录验证,只有已登录的用户可以访问
    auth?: boolean,
    //目标路由是否设置为只有游客才能访问
    guest?:boolean,
    //访问权限
    permissons?:string[],
    //定义菜单
    menu?:IMenu,
    //进入动画类
    enterClass?:string,
    //离开动画类
    leaveClass?:string
  }
}