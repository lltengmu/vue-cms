import Axios from "./Axios";

//生成一个axios实例
const Http = new Axios({
    baseURL:"/api",
    timeout:100000,
    headers:{}
})
export default Http