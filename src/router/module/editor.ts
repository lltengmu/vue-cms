import { RouteRecordRaw } from "vue-router";

export default {
    name: 'editor',
    path: '/editor',
    meta: { title: "编辑器", icon: 'fas fa-baseball-ball', show: true,auth:true },
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
            meta: { title: "markdown", show: true },
            component: () => import('@/views/editors/markdown.vue'),
        }
    ]
} as RouteRecordRaw