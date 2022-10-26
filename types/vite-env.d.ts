/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface viteEnv {
  readonly VITE_SOME_KEY: number
  readonly VITE_ROUTR_AUTOLOAD: boolean
  readonly VITE_API_URL: string
}