import userApi,{ User } from "@/api/userApi";
import { defineStore } from "pinia";
import user from "../../Mock/user";

export default defineStore('user',{
    state:() => {
        return {
            info: {} as null | User,
        }
    },
    actions:{
        async getUserInfo(){
          const res = await userApi.info();
          this.info = res.resoult;
        }
    }
})