// test.ts

import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        messge:'请求成功',
        type:'success',
        resoult: {
          name: '向军哥哥',
          age:18,
          avatar:"/images/App.jpg"
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        messge:'请求成功',
        type:'success',
        resoult: {
          token: Random.string(10),
        },
      }
    },
  },
] as MockMethod[]