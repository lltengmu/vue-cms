import http from '@/plugins/axios';

export interface User {
    name: string
    age: number
    avatar: string
}
interface LoginInterface {
    token:string
}
class userApi {
    public info() {
        return http.request<User>({
            url: `/user/info`
        })
    }
    public login(data:any) {
        return http.request<LoginInterface>({
            url: `/login`,
            method: 'post',
            data
        })
    }
}
export default new userApi()