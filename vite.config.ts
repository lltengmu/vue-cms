import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugin  from './vite/plugins'

export default ({command,mode}:ConfigEnv) => {

  const isbuild = command === 'build'
  //读取项目的根路径
  const root = process.cwd()
  //console.log(root)
  //读取.env 配置文件
  const env = parseEnv(loadEnv(mode,root))
  return {
    //plugins:[vue()],
    plugins:setupPlugin(isbuild,env),
    resolve:{
      alias,
    },
  }
}
