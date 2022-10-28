import { RouteRecordRaw } from "vue-router";

export default {
    name: 'editor',
    path: '/editor',
    meta: { auth:true,menu:{ title: "编辑器", icon: 'fas fa-baseball-ball', } },
    component: () => import('@/layouts/admin.vue'),
    children: [
        {
            name: 'base',
            path: 'base',
            meta: { title: "base", show: true },
            component: () => import('@/views/editors/base.vue'),
        },
        {
            name: 'markdown',
            path: 'markdown',
            meta: { menu:{ title: "markdown" } },
            component: () => import('@/views/editors/markdown.vue'),
        }
    ]
} as RouteRecordRaw