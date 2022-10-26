import { store } from '@/utils';
import userStore from '@/store/user';
import { RouteLocationNormalized, Router } from 'vue-router'
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
        return store.get('token')?.token
    }
    //游客访问
    private isGuest(route: RouteLocationNormalized) {
        return Boolean(!route.meta.guest || (route.meta.guest && !this.token()))
    }
     
    //登录用户访问
    private isLogin(route: RouteLocationNormalized) {
        return Boolean(!route.meta.auth || (route.meta.auth && this.token()))
    }
}
export default (router: Router) => {
    return new Guard(router).run()
}