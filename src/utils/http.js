import axios from "axios";
import QS from "qs";

axios.defaults.headers["Content-type"] = "application/json;charset=utf-8";

// 创建axios实例
const serivce = axios.create({
  timeout: 10000
});

// 响应拦截器
serivce.interceptors.response.use(res => {
    
})


export default serivce;
