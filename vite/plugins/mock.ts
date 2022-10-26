import { viteMockServe } from 'vite-plugin-mock';

export default function setupMockPlugin(isbuild:boolean){
    return viteMockServe({
        mockPath:'mock',
        localEnabled: !isbuild,
    })
}