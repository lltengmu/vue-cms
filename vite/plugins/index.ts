import vue from "@vitejs/plugin-vue";
import { ConfigEnv, Plugin } from "vite";
import setupMockPlugin from "./mock";

export default function setupPlugin(isbuild:boolean,env:ViteEnv){
    const plugins:Plugin[] = [vue()];
    plugins.push(setupMockPlugin(isbuild))
    return plugins
}