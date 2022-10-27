import http from '@/plugins/axios';

export interface User {
    name: string
    age: number
    avatar: string
}
export interface ILoginData {
    account:string,
    password:string
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
    public login(data:ILoginData) {
        return http.request<LoginInterface>({
            url: `/login`,
            method: 'post',
            data
        })
    }
}
export default new userApi()