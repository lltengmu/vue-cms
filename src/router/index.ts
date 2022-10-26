import { App } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import routes from './routes'
import autoLoadRoutes from './autoload'
import guard from './guard'


const router = createRouter({
    history:createWebHistory(),
    routes:[...routes,...autoLoadRoutes]
})

//挂载路由
export function setupRouter(app:App){
    guard(router)
    app.use(router)
}
export default router;