import userApi, { ILoginData } from '@/api/userApi'
import { cacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import router from '@/router'
import userStore from '@/store/userStore'
import store from './store'



export async function login(values:ILoginData) {
    //发送登录请求
    const { resoult: { token } } = await userApi.login(values)
    //存储token
    utils.store.set(cacheEnum.TOKEN_NAME, {
        token
    })
    //判断在登录之前是否有被缓存的目标地址
    const routeName = store.get(cacheEnum.REDIRECT_ROUTE_NAME)?? 'home';
    console.log(routeName);
    //页面跳转
    router.push({name:routeName})
}

export function logout() {
    utils.store.remove(cacheEnum.TOKEN_NAME)
    //退出后重定向到首页
    router.push({ path:"/" })
    //删除用户信息
    userStore().info = null;
}
