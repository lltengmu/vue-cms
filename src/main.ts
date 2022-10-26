import { createApp } from 'vue'
import '@/styles/global.scss'
import router, { setupRouter } from './router'
import App from './App.vue'
import setupPlugins from './plugins/index'

async function bootStrap() {
    const app = createApp(App)
    setupRouter(app)
    setupPlugins(app)
    await router.isReady()
    app.mount('#app')
}
bootStrap()
