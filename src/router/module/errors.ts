import { RouteRecordRaw } from "vue-router";

export default {
    name: "errors",
    path: '/errors',
    meta: { title: "错误页面", icon: 'fas fa-address-card', show: true,auth:true },
    component: () => import('@/layouts/admin.vue'),
    children: [
        {
            name: "error.404",
            path: '404',
            meta: { title: "404页面", show: true },
            component: import('@/views/errors/404.vue')
        },
        { 
            name: "error.403", 
            path: '403', 
            meta: { title: "403页面", show: true },
            component: import('@/views/errors/403.vue') },
        { 
            name: "error.500", 
            path: '500', 
            component: import('@/views/errors/500.vue') 
        },
    ]
} as RouteRecordRaw