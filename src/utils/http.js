import axios from "axios";
import QS from "qs";

axios.defaults.headers["Content-type"] = "application/json;charset=utf-8";

// 创建axios实例
const serivce = axios.create({
  timeout: 10000
});

// response拦截器
serivce.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

export default serivce;