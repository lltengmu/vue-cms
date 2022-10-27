import utils from '@/utils';
import userStore from '@/store/userStore';
import { RouteLocationNormalized, Router } from 'vue-router'
import { cacheEnum } from '@/enum/cacheEnum';
class Guard {
    constructor(private router: Router) { }
    public run() {
        //定义路由的全局前置守卫
        this.router.beforeEach(this.beforeEach.bind(this))
    }
    private async beforeEach(to:RouteLocationNormalized,from:RouteLocationNormalized){
        if (this.isLogin(to) === false) return { name: 'login' }
        if (this.isGuest(to) === false) return from
        await this.getUserInfo();
    }

    private getUserInfo(){
        if(this.token())userStore().getUserInfo()
    }

    private token():string | null {
        return utils.store.get(cacheEnum.TOKEN_NAME)
    }
    //游客访问
    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()));
    }
     
    //登录用户访问
    private isLogin(route: RouteLocationNormalized) {
        //如果目标路由元信息没有设置auth:true（需要登录才能访问） state == true,
        //如果目标路由元信息存在auth，且可以login的token则也可以访问
        const state = Boolean(!route.meta.auth || (route.meta.auth && this.token()))
        
        if(state === false){
            //用户未登录的情况下访问了一个需要登录才可以访问的页面，则将他的目标地址缓存到本地，登录后直接重定向到目标路由
            utils.store.set(cacheEnum.REDIRECT_ROUTE_NAME,route.name)
        }
        return state;
    }
}
export default (router: Router) => {
    return new Guard(router).run()
}