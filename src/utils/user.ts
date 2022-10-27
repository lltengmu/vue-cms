import userApi, { ILoginData } from '@/api/userApi'
import { cacheEnum } from '@/enum/cacheEnum'
import utils from '@/utils'
import router from '@/router'



export async function login(values:ILoginData) {
    //发送登录请求
    const { resoult: { token } } = await userApi.login(values)
    //存储token
    utils.store.set(cacheEnum.TOKEN_NAME, {
        token
    })
    //页面跳转
    router.push({name:'home'})
}

export function logout() {
    utils.store.remove(cacheEnum.TOKEN_NAME)
}
