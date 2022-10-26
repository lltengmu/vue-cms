import { App } from 'vue'
import _ from 'lodash'
import { setupTailwindcss } from './tailwindcss/index'
import setupElementPlus from './elementui';
import setupPinia from './pinia';
export default function setupPlugins(app:App){
    aotuRegisterComponent(app);
    setupTailwindcss()
    setupElementPlus(app)
    setupPinia(app)
}
//自动注册全局组件
function aotuRegisterComponent(app:App){
    const components = import.meta.glob('../components/form/*.vue',{ eager: true }) as Record<string,any>;
    Object.keys(components).forEach(key => {
        const name = key.match(/hd-.+(?=.vue)/ig) as unknown as string
        app.component(_.camelCase(name[0]),components[key].default)
    });
}