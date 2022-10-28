import { RouteRecordRaw } from "vue-router";

export default {
    name: "errors",
    path: '/errors',
    //当路由元信息中存在menu属性的时候需要在后台显示此路由
    meta: { auth:true,menu:{ title: "错误页面", icon: 'fas fa-address-card' } },
    component: () => import('@/layouts/admin.vue'),
    children: [
        {
            name: "error.404",
            path: '404',
            meta: { menu:{ title: "404页面" }},
            component: import('@/views/errors/404.vue')
        },
        { 
            name: "error.403", 
            path: '403', 
            meta: { menu:{ title: "403页面" } },
            component: import('@/views/errors/403.vue') },
        { 
            name: "error.500", 
            path: '500', 
            component: import('@/views/errors/500.vue') 
        },
    ]
} as RouteRecordRaw